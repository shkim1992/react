import './App.css';

function AppJSX() {
  const name = '엘리';
  const list = ['우유', '딸기', '바나나', '사과', '샤인머스캣'];

  return (
    <>
      <h1 className='orange'>{`Hello! ${name}`}</h1>
      <h2>Hello!</h2>
      <p>{name}</p>
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <img
        style={{ width: '200px', height: '200px' }}
        src='https://images.unsplash.com/photo-1723843038794-97663cc894ba?q=80&w=4160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        alt='nature'
      />
    </>
  );
}

export default AppJSX;
