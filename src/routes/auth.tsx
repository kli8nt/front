import { Link } from 'react-router-dom'

export default function Index() {
  return (
    <div className="grid place-content-center h-screen">
      <div className="text-center">
        <h1 className="text-3xl font-black">Connect your Github Account</h1>
        <div className="py-20 flex justify-center">
          <Link
            to="/auth"
            className="flex items-center space-x-3 justify-center button"
          >
            <span>Login</span>
            <GithubIcon />
          </Link>
        </div>
      </div>
    </div>
  )
}

function GithubIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className="fill-current"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_416_3634)">
        <path d="M6.31523 6.17605C6.06523 5.53805 6.07523 4.80905 6.18623 4.14205C6.95042 4.37103 7.66812 4.73326 8.30623 5.21205C8.58623 5.42605 8.95323 5.49505 9.29523 5.39205C10.1728 5.12949 11.0842 4.99741 12.0002 5.00005C12.9612 5.00005 13.8742 5.14005 14.7032 5.39105C15.0452 5.49505 15.4122 5.42505 15.6912 5.21105C16.329 4.73237 17.0464 4.37013 17.8102 4.14105C17.9212 4.80805 17.9302 5.53705 17.6822 6.17405C17.5322 6.55805 17.6072 7.00005 17.8902 7.31405C18.6142 8.11705 19.0002 9.04005 19.0002 10.0001C19.0002 12.1141 17.0302 14.1871 13.8662 14.8181C13.0742 14.9761 12.7652 15.9731 13.3712 16.5441C13.7602 16.9101 14.0002 17.4261 14.0002 18.0001V21.0001C14.0002 21.2653 14.1056 21.5196 14.2931 21.7072C14.4807 21.8947 14.735 22.0001 15.0002 22.0001C15.2654 22.0001 15.5198 21.8947 15.7073 21.7072C15.8949 21.5196 16.0002 21.2653 16.0002 21.0001V18.0001C16.0002 17.4301 15.8802 16.8881 15.6662 16.3971C18.6832 15.3501 21.0002 12.9931 21.0002 10.0001C21.0002 8.65305 20.5162 7.41505 19.7132 6.37805C19.9232 5.55805 19.9042 4.73205 19.8242 4.09805C19.7532 3.53005 19.6542 2.78605 19.2542 2.34205C18.6592 1.68305 17.6742 2.07105 16.9742 2.31005C16.2233 2.56414 15.5089 2.91546 14.8492 3.35505C13.9183 3.11746 12.961 2.99819 12.0002 3.00005C11.0062 3.00005 10.0472 3.12505 9.14923 3.35605C8.48955 2.91645 7.77514 2.56513 7.02423 2.31105C6.32423 2.07105 5.33823 1.68305 4.74323 2.34205C4.33523 2.79405 4.25023 3.47905 4.17723 4.06105L4.17223 4.09905C4.09223 4.73405 4.07423 5.56105 4.28423 6.38205C3.48423 7.41805 3.00023 8.65405 3.00023 10.0001C3.00023 12.9921 5.31723 15.3501 8.33423 16.3971C8.11585 16.8963 8.00218 17.4351 8.00023 17.9801L7.83223 18.0141C7.11523 18.1131 6.65623 18.0241 6.34423 17.8921C5.58423 17.5701 5.19223 16.7591 4.71423 16.1391C4.41623 15.7541 3.98223 15.2731 3.31623 15.0511C3.1916 15.0096 3.06003 14.993 2.92901 15.0024C2.79799 15.0117 2.6701 15.0468 2.55263 15.1056C2.3154 15.2243 2.13504 15.4324 2.05123 15.6841C1.96742 15.9357 1.98703 16.2104 2.10574 16.4477C2.22445 16.6849 2.43254 16.8652 2.68423 16.9491C3.24223 17.1351 3.62823 18.0911 3.98223 18.5151C4.35523 18.9631 4.85123 19.4311 5.56223 19.7331C6.24423 20.0231 7.04523 20.1261 8.00023 20.0091V21.0001C8.00023 21.2653 8.10559 21.5196 8.29312 21.7072C8.48066 21.8947 8.73501 22.0001 9.00023 22.0001C9.26545 22.0001 9.5198 21.8947 9.70734 21.7072C9.89487 21.5196 10.0002 21.2653 10.0002 21.0001V18.0001C10.0002 17.4261 10.2402 16.9101 10.6292 16.5441C11.2362 15.9721 10.9262 14.9761 10.1342 14.8181C6.96923 14.1871 5.00023 12.1141 5.00023 10.0001C5.00023 9.04205 5.38523 8.11905 6.10823 7.31605C6.39123 7.00205 6.46523 6.56005 6.31523 6.17605Z" />
      </g>
      <defs>
        <clipPath id="clip0_416_3634">
          <rect width="24" height="24" />
        </clipPath>
      </defs>
    </svg>
  )
}