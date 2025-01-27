import Header from "./components/Header"
import Main from "./components/Main"
import { PostsProvider } from "./context/PostsContext"

const App = () => {
  return (
    <PostsProvider>
      <Header/>
      <Main/>
    </PostsProvider>
  )
}

export default App