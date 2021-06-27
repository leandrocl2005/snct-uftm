import backgroundImage from '../../assets/background-image.jpg';

export default function BigH1() {
  return (
    <h1 style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      textAlign: 'center',
      color: "white",
      padding: "0 32px",
      backgroundImage: `url(${backgroundImage})`
    }}>
      Inteligência Artificial: <br /> a nova fronteira da ciência brasileira
    </h1>
  )
}

