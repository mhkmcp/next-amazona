import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <h1>Products</h1>
      <ul>
        <li>product-1</li>
        <li>product-2</li>
        <li>product-3</li>
        <li>product-4</li>
        <li>product-5</li>
      </ul>
    </Layout>
  );
}
