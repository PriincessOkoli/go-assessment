import { Helmet } from 'react-helmet-async'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

function NotFound() {
  const navigate = useNavigate()

  return (
    <div className="h-screen grid-cols-1 p-[4rem] grid place-items-center">
      <Helmet>
        <title>Go | 404</title>
      </Helmet>

      <div className=" grid place-items-center text-center ">
        <p className="text-brand-200 mt-8 font-medium"> Oops! Page not found.</p>
        <small className="md:w-[40ch] text-center text-brand-50 mt-2">
          There’s nothing here... The link you followed is probably broken or the page has been
          removed. We’re sorry you had to see this.
        </small>
        <Button className="p-4 rounded-xl mt-4 bg-primary text-white" fullWidth onClick={() => navigate('/')}>
          <span>GO HOME</span>
        </Button>
      </div>
    </div>
  )
}

export default NotFound
