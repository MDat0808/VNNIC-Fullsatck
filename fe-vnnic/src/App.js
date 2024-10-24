import "./App.css";
import { Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";
import Layout from "./components/layout/Layout";
import Loader from "./components/ui/Loading"; // Import your Loader component
import SearchSidebar from "./components/ui/SearchSiderbar";
const Home = React.lazy(() => import("./pages/Home"));
const News = React.lazy(() => import("./pages/News"));
const UnionMemberSpotlight = React.lazy(() =>
  import("./pages/UnionMemberSpotlight")
);
const DetailUnionMember = React.lazy(() => import("./pages/DetailUnionMember"));
const DetailArticle = React.lazy(() => import("./pages/DetailArticle"));
const Admin = React.lazy(() => import("./pages/Admin"));
const DashboardNews = React.lazy(() => import("./pages/DashboardNew"));
const Search = React.lazy(() => import("./pages/Search"));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/article/:categorySlug" element={<News />} />

          <Route
            path="/doan-vien-tieu-bieu"
            element={<UnionMemberSpotlight />}
          />
          <Route
            path="/doan-vien-tieu-bieu/detail/:id"
            element={<DetailUnionMember />}
          />
          <Route
            path="/article/:slug/:category/:id"
            element={<DetailArticle />}
          />
          <Route element={<SearchSidebar />}>
            <Route path="/search" element={<Search />} />
          </Route>
        </Route>
        <Route path="/dashboard" element={<Admin />}>
          <Route index path="home" element={<DashboardNews />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
