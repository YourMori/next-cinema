interface Props {
  params: {
    id: string;
  };
}

const MoviePage = ({ params }: Props) => {
  return <h1 className="text-white text-2xl">Movie ID: {params.id}</h1>;
};

export default MoviePage;
