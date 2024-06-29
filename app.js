document.fullscreenEnabled()
document.requestStorageAccess()
document.exitFullscreen()

import React from 'react'

const app = () => {
  const [data, setData] = useState([])
  return (
    <div>
      {data.map((item) => <h1>{item.title}</h1>)}
    </div>
  )
}

export default app