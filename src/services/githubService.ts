export const fetchRepositories = async (query: string) => {
  const response = await fetch(`https://api.github.com/search/repositories?q=${query}`);
  const data = await response.json();
  return data.items.map((repo: any) => ({
    Name: repo.name,
    LastCommit: new Date(repo.updated_at),
    Stars: repo.stargazers_count,
    PullRequests: repo.pull_requests ? repo.pull_requests.length : 0,
    Url: repo.html_url,
    Languages: repo.language ? [repo.language] : []
  }));
};

export const fetchRepositoriesbyUser = async (userName: string) => {
  const token = "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";
  const response = await fetch(`https://api.github.com/users/${userName}/repos`, {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    console.error('Error fetching repositories');
    return [];
  }

  const data = await response.json();

  return Promise.all(data.map(async (repo: any) => {
    const readmeResponse = await fetch(`https://api.github.com/repos/${userName}/${repo.name}/readme`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    let liveDemoUrl = null;

    if (readmeResponse.ok) {
      const readmeData = await readmeResponse.json();
      const readmeContent = atob(readmeData.content);
      liveDemoUrl = readmeContent.match(/https?:\/\/\S+/)?.[0];
      // הסרת סוגריים אם קיימים בקישור
      liveDemoUrl = liveDemoUrl ? liveDemoUrl.replace(/[()]/g, '') : null;
    }

    return {
      Name: repo.name,
      LastCommit: new Date(repo.updated_at),
      Stars: repo.stargazers_count,
      PullRequests: repo.open_issues_count, // משתמש בבעיות פתוחות כתחליף לבקשות משיכה
      Url: repo.html_url,
      Languages: repo.language ? [repo.language] : [],
      LiveDemoUrl: liveDemoUrl, // אם יש קישור ב-README
      Description: repo.description, // תיאור נוסף אם קיים
    };
  }));
};

