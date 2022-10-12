import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Script from "next/script";
import Sidebar from "../components/sidebar";

export default function Home() {
  return (
    <div className="relative">
      <Sidebar />
      <h1 className="text-3xl font-bold underline text-center">
        Apointment Setter
      </h1>
      <Script src="/crisp.js" />
    </div>
  );
}
