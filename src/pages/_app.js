import "@/styles/globals.scss";

export default function App({ Component, pageProps }) {
  return <div>
    <Component {...pageProps} />
    <div id="modal-root"></div>
  </div>;
}
