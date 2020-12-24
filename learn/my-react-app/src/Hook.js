import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

function Hook() {
  const [count, setCount] = useState(0);
  // 和class中this.state区别 ：1.不用总是一个对象 2this.setState({})会合并而不是替换
  const [state, setState] = useState({ a: 0, b: "2" });
  const refDiv = useRef();

  // useEffect传（回调，依赖关系数组） 依赖关系数组不传的话，回调每次都会执行，传了的话只有依赖变了会执行,传空数组相当于没有会变的依赖。
  useEffect(() => {
    console.log(refDiv, "refDiv");
    refDiv.current.innerText = `click me ${state.b} ci`;
    return () => {
      // 相当于componentWillUnmount但不是组件卸载才执行，组件每一次重新渲染都执行
      refDiv.current.innerText = `wo xiezai le`;
    };
  }, [state.b]);

  return (
    <div
      style={{
        width: "100%",
        height: "300px",
        border: "1px solid red",
        overflow: "auto",
      }}
    >
      hook介绍
      <p>
        you click {count}
        {JSON.stringify(state)}count
      </p>
      <div ref={refDiv}></div>
      <button
        onClick={() => {
          setCount(count + 1);
          setState({ c: count, b: count + 2 });
        }}
      >
        点我
      </button>
    </div>
  );
}

export default Hook;
