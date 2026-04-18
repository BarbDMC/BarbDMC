import '../styles/globals.css';
import "@fortawesome/fontawesome-svg-core/styles.css"; 
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; 
import 'font-awesome/css/font-awesome.min.css';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}  