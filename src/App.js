
function App() {
  return (
    <div className="calc-grid justify-center grid max-w-lg p-4 ">
      <div className="output grid  min-h-24 max-h-fit bg-blue-500">
        <div className="previous-operand text-right max-w-xs break-words max-h-fit bg-yellow-200">08158527977</div>
        <div className="current-operand  text-right max-w-xs break-words max-h-fit bg-yellow-400">2969669</div>
      </div>

      <div className="btns min-h-fit grid grid-cols-4">
        <button className="h-full p-2 col-span-2 border-2 bg-blue-200 hover:bg-blue-50"> AC</button>
        <button className="h-full p-2 border-2 bg-blue-200 hover:bg-blue-50">DEL</button>
        <button className="h-full p-2 border-2 bg-blue-200 hover:bg-blue-50">/</button>
        <button className="h-full p-2 border-2 bg-blue-200 hover:bg-blue-50">1</button>
        <button className="h-full p-2 border-2 bg-blue-200 hover:bg-blue-50">2</button>
        <button className="h-full p-2 border-2 bg-blue-200 hover:bg-blue-50">3</button>
        <button className="h-full p-2 border-2 bg-blue-200 hover:bg-blue-50">*</button>
        <button className="h-full p-2 border-2 bg-blue-200 hover:bg-blue-50">4</button>
        <button className="h-full p-2 border-2 bg-blue-200 hover:bg-blue-50">5</button>
        <button className="h-full p-2 border-2 bg-blue-200 hover:bg-blue-50">6</button>
        <button className="h-full p-2 border-2 bg-blue-200 hover:bg-blue-50">+</button>
        <button className="h-full p-2 border-2 bg-blue-200 hover:bg-blue-50">7</button>
        <button className="h-full p-2 border-2 bg-blue-200 hover:bg-blue-50">8</button>
        <button className="h-full p-2 border-2 bg-blue-200 hover:bg-blue-50">9</button>
        <button className="h-full p-2 border-2 bg-blue-200 hover:bg-blue-50">-</button>
        <button className="h-full p-2 border-2 bg-blue-200">.</button>
        <button className="h-full p-2 border-2 bg-blue-200 hover:bg-blue-50">0</button>
        <button className="h-full p-2 border-2 col-span-2 bg-blue-200 hover:bg-blue-50">=</button>
      </div>
    </div>
  )
}

export default App;


