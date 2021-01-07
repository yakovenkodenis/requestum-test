import { FC } from 'react';

import { Footer } from './components/footer';
import { Header } from './components/header';
import { ReposList } from './components/repos';

const App: FC = () => {
  return (
    <div className="page-container">
      <Header />
      <ReposList />
      <Footer />
    </div>
  );
};

export default App;
