import React, { useEffect, useState } from "react";
import Axios from "axios";
import Movie from "./../../../components/Movie";
import Loader from "./../../../components/Loader";

export default function AboutPage() {
  const [state, setState] = useState({ listMovie: [], loading: false });

  useEffect(() => {
    setState({
      ...state,
      loading: true,
    });
    Axios({
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
      method: "GET",
    }).then((result) => {
      setState({
        ...state,
        listMovie: result.data,
        loading: false,
      });
    });
  }, []);

  const renderHMTL = () => {
    const { listMovie, loading } = state;
    if (loading) return <Loader />;
    if (listMovie && listMovie.length > 0) {
      return listMovie.map((movie) => {
        return <Movie key={movie.maPhim} movie={movie} />;
      });
    }
  };

  return (
    <div className="container">
      <h1>AboutPage</h1>
      <div className="row"> {renderHMTL()}</div>
    </div>
  );
}
