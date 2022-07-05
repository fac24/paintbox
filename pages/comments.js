import { supabase } from "../utils/supabaseClient";


function ShowComments() {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)
  
    useEffect(() => {
      setLoading(true)
      fetch('/api/profile-data')
        .then((res) => res.json())
        .then((data) => {
          setData(data)
          setLoading(false)
        })
    }, [])
  
    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No comments yet</p>
  
    return (
      <div>
        <h1>{data.name}</h1>
        <p>{data.bio}</p>
      </div>
    )
  }

export default ShowComments;
