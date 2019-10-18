import React from 'react'
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom'
import Header from '../src/components/Header/Header'
import Footer from '../src/components/Footer/Footer'
import ContentList from '../src/components/Content/ContentList'
import OnePhraseADay from '../src/containers/OnePhraseADay/OnePhraseADay'
import VocabQuiz from '../src/containers/VocabQuiz/VocabQuiz'
import Contact from '../src/containers/Contact/Contact'
import PageNotFound from '../src/components/PageNotFound/PageNotFound'
import styles from './App.module.css'


function App() {
  return (
    <div className={styles.App}>
      <style>@import url('https://fonts.googleapis.com/css?family=Amatic+SC:400,700|Julius+Sans+One|Quicksand&display=swap');</style>
      <BrowserRouter>
        <Header />
        <Switch>
          <Redirect path="/" exact to="/vocabuilder" />
          <Route path="/vocabuilder" exact component={ContentList} />
          <Route path="/vocabuilder/one-phrase-a-day" exact component={OnePhraseADay} />
          <Route path="/vocabuilder/vocab-quiz" exact component={VocabQuiz} />
          <Route path="/vocabuilder/contact" exact component={Contact} />
          <Route component={PageNotFound} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
