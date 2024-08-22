import { PropsWithChildren } from "react";
import { NavLink } from "react-router-dom";
import Layout from "../components/layout/layout";

export default function Root(props: PropsWithChildren) {
  return (
    <Layout>
      {props.children}
      <nav className="nav">
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/search">Search</NavLink>
      </nav>
    </Layout>
  );
}
