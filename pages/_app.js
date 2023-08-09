import { useEffect, useState } from "react";
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import "../styles/globals.css";
import { useSelector } from "react-redux";
import Loader from "../components/Loader";
import { ReduxProvider } from "../redux/provider";
import { AuthProvider } from "../redux/AuthProvider";



function MyApp({ Component, pageProps }) {

console
  return (
    <>
      <ReduxProvider>
        <AuthProvider >
          <Component {...pageProps} />
        </AuthProvider>
      </ReduxProvider>
    </>
  );
}

export default MyApp;
