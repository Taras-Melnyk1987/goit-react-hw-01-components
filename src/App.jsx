

import Section from './components/Section/Section';
import Profile from './components/Profile/Profile/Profile';


import user from './components/Profile/user.json';


function App() {
  return (
    /*<div className={styles.app}>*/
      <Section title="Homework 1">
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Section>


    /*</div>*/
  );
}

export default App;
