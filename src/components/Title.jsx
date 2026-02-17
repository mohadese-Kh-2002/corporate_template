const Title = ({title,classname}) => {
  return (
    <div className={`wave-box  bg-(--primary) inline-flex text-white  p-5 ${classname}`}>{title}</div>
  )
}

export default Title