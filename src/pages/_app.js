import { store } from '@/redux/store';
import '@/styles/globals.css'
import { Provider } from 'react-redux';

export default function App({ Component, pageProps }) {

  const getLayout = Component.getLayout || ((page) => page);

  // return getLayout(<Component {...pageProps} />); 
  
  //  new line for redux added 

  return (
    <Provider store={store}>{getLayout(<Component {...pageProps} />)}</Provider>
  )
}
