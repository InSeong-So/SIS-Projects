// import StyledCalendar from './presentor/Calendar';
import Footer from './presentor/components/Footer';
import Header from './presentor/components/Header';
import MainSection from './presentor/components/MainSection';
import TodoList from './presentor/TodoList';

function App() {
  return (
    <>
      <Header />
      <MainSection>
        {/* <StyledCalendar /> */}
        <TodoList />
      </MainSection>
      <Footer />
    </>
  );
}

export default App;
