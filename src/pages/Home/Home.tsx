import Header from '../../layouts/Header/Header';

const Home = () => {
  return (
    <>
      <Header/>
      <div id="sidebar">
        <nav>
          <ul>
            <li>
              <a href={`/login`}>Login</a>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail"></div>
    </>
  );
};

export default Home;