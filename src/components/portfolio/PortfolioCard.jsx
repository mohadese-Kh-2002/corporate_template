import { BiCategory } from 'react-icons/bi'
import Button from '../Button'

const PortfolioCard = ({images,title,category,id}) => {
  return (
    <div className='mx-auto hover:scale-105 transition-all items-center duration-300 rounded-xl p-5 flex  flex-col gap-3 bg-(--surface) shadow-[0_10px_20px_-15px_var(--primary)] max-w-75 w-full aspect-square'>
      <div className='w-full rounded-lg border border-(--primary) overflow-hidden'>
        <img src={images[0]} alt='portfolio' />
      </div>
      <h6 className='font-bold text-[18px]'>{title}</h6>
      <div className='flex items-center gap-1.5 text-[14px]'>
        <BiCategory/>
        <span>{category}</span>
      </div>
      <Button to={`/portfolio/${id}`} variant='outline'>دیدن جزییات</Button>
    </div>
  )
}

export default PortfolioCard