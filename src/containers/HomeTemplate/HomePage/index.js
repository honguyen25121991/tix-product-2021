import React, { useEffect } from "react";
import Movie from "./../../../components/Movie";
import Loader from "./../../../components/Loader";
import { actListMovieApi } from "./../ListMoviePage/modules/action";
import { connect } from "react-redux";

function HomePage(props) {
  useEffect(() => {
    props.listMovieApi();
  }, []);

  const renderHMTL = () => {
    const { listMovie, loading } = props;
    if (loading) return <Loader />;
    if (listMovie && listMovie.length > 0) {
      return listMovie.map((movie) => {
        return <Movie key={movie.maPhim} movie={movie} />;
      });
    }
  };

  return (
    <div className="container">
      <h1>HomePage</h1>
      <div className="row">{renderHMTL()}</div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    listMovie: state.listMovieReducer.data,
    loading: state.listMovieReducer.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    listMovieApi: () => {
      dispatch(actListMovieApi());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
