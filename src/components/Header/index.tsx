export default function Header() {
  return (
    <header className="masthead text-center text-white">
      <div className="masthead-content">
        <div className="container px-5">
          <h1 className="masthead-heading mb-0">Semana Nacional de Ciência e Tecnologia</h1>
          <a
            className="btn px-5 py-2 btn-primary rounded-pill"
            style={{
              backgroundColor: "white",
              color: "#ee0979",
              fontFamily: "Roboto",
              fontWeight: 700,
              fontSize: '1.2rem',
              border: "0px",
              marginTop: '128px'
            }}
            href="#courses"
          >IR PARA AS ATIVIDADES</a>
        </div>
      </div>
      <div className="bg-circle-1 bg-circle"></div>
      <div className="bg-circle-2 bg-circle"></div>
      <div className="bg-circle-3 bg-circle"></div>
      <div className="bg-circle-4 bg-circle"></div>
    </header >
  )
}