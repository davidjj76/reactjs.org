import {ThemeContext, themes} from './theme-context';
import ThemeTogglerButton from './theme-toggler-button';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.toggleTheme = () => {
      this.setState(state => ({
        theme:
          state.theme === themes.dark
            ? themes.light
            : themes.dark,
      }));
    };

    this.state = {
      theme: themes.light,
    };
  }

  render() {
    // highlight-range{1-5,7}
    // The state value and updater function can be passed to the provider
    const contextValue = {
      theme: this.state.theme,
      toggleTheme: this.toggleTheme,
    };
    return (
      <ThemeContext.Provider value={contextValue}>
        <Content />
      </ThemeContext.Provider>
    );
  }
}

function Content() {
  return (
    <div>
      <ThemeTogglerButton />
    </div>
  );
}

ReactDOM.render(<App />, document.root);
