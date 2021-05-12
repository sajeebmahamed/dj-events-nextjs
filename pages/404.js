import styles from "@/styles/404.module.css";
import Head from "next/head";
import Link from "next/link";
import { FaExclamationTriangle } from "react-icons/fa";
const NotFoundPage = () => {
   return (
      <div>
         <Head>
            <title> Page Not Found </title>
         </Head>
         <div className={styles.error}>
            <h1>
               <FaExclamationTriangle /> 404
            </h1>
            <h4>Sorry, there is nothing here</h4>
            <Link href="/">Go Back Home</Link>
         </div>
      </div>
   );
};
export default NotFoundPage;
