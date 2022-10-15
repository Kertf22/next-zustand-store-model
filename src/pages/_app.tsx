import 'bootstrap/dist/css/bootstrap.min.css';
import { useCreateStore, Provider } from '../store';
import type { AppProps } from 'next/app'



interface pageProps {
  initialZustandState: any
}

function MyApp({ Component, pageProps }: AppProps<pageProps>) {

  // Here we create the store and pass the initial that will comes from the server
  const createStore = useCreateStore(pageProps.initialZustandState)

  return (
    <Provider createStore={createStore}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
