import Image from 'next/image'
import {HomeIcon, BadgeCheckIcon, UserIcon, 
    SearchIcon, CollectionIcon, LightningBoltIcon} from '@heroicons/react/outline'
import HeaderItem from './HeaderItem'
function Header() {
    return (
        <header className="flex flex-col sm:flex-row m-5 justify-between items-center">
            <div className="flex flex-grow justify-evenly max-w-2xl">
                <HeaderItem title='Home' Icon={HomeIcon} />
                <HeaderItem title='Trending' Icon={LightningBoltIcon} />
                <HeaderItem title='Verified' Icon={BadgeCheckIcon} />
                <HeaderItem title='Collections' Icon={CollectionIcon} />
                <HeaderItem title='Search' Icon={SearchIcon} />
                <HeaderItem title='Account' Icon={UserIcon} />
            </div>
            <Image src="https://links.papareact.com/ua6" width={200} height={100} />
        </header>
    )
}

export default Header
