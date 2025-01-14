import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import SearchBar from '../components/SearchBar';
import { fetchRepositoriesbyUser } from '../services/githubService';
import { RepositoryInfo } from '../types/RepositoryInfo';

const Portfolio: React.FC = () => {
  const [repositories, setRepositories] = useState<RepositoryInfo[]>([]);
  const [allRepositories, setAllRepositories] = useState<RepositoryInfo[]>([]); // מערך לכל הרפוזיטוריות
  const [loading, setLoading] = useState<boolean>(false);

  // טעינת כל הרפוזיטוריות של המשתמש
  useEffect(() => {
    const fetchAllRepositories = async () => {
      setLoading(true);
      try {
        const result = await fetchRepositoriesbyUser('ruth7873'); // הכנס את שם המשתמש שלך כאן
        setRepositories(result); // להציב גם את התוצאה הראשונית
        setAllRepositories(result); // לשמור את כל הרפוזיטוריות לחיפוש מאוחר יותר
      } catch (error) {
        console.error("Error fetching repositories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllRepositories();
  }, []);

  // חיפוש על הרפוזיטוריות שהתקבלו
  const handleSearch = (query: string) => {
    const filteredRepositories = allRepositories.filter((repo) =>
      repo.Name.toLowerCase().includes(query.toLowerCase())
    );
    setRepositories(filteredRepositories); // עדכון התצוגה עם התוצאות המסוננות
  };

  return (
    <div>
      <Header />
      <main>
        <h2>My GitHub Projects</h2>
        <SearchBar onSearch={handleSearch} />
        {loading ? <p>Loading...</p> : (
          <div className="project-list">
            {repositories.map((project) => (
              <ProjectCard key={project.Name} project={project} />
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
