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
    try {
      const response = await fetch(`https://api.github.com/users/${userName}/repos`);
      
      if (!response.ok) {
        throw new Error(`Failed to fetch repositories for ${userName}`);
      }
  
      const data = await response.json();
  
      // אם אין נתונים או אם הנתונים אינם מערך, נחזיר מערך ריק
      if (!Array.isArray(data)) {
        throw new Error('Received data is not an array');
      }
  
      return data.map((repo: any) => ({
        Name: repo.name,
        LastCommit: new Date(repo.updated_at),
        Stars: repo.stargazers_count,
        PullRequests: repo.pull_requests ? repo.pull_requests.length : 0,
        Url: repo.html_url,
        Languages: repo.language ? [repo.language] : []
      }));
    } catch (error) {
      console.error("Error fetching repositories:", error);
      return []; // במקרה של שגיאה, נחזיר מערך ריק
    }
  };
  
  