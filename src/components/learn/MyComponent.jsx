//()=>{ }
//component = html + css + js
//fragment

import "./style.css";
const MyComponent = () => {
  const hoidanit = [1, 2, 3]
  return (
    <>
      <div> {JSON.stringify(hoidanit)} & trietnhm update </div>
      <div>{console.log('ERIC')}</div>
      <div className="child"
        style={{ borderRadius: "10px" }}>
        child
      </div>
    </>
  );
};

export default MyComponent;
