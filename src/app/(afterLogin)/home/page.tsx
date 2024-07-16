import Tab from './_component/Tab';
import TabProvider from './_component/TabProvider';
import style from './home.module.css';

export default function Home() {
  return (
    <main className={style.main}>
      <TabProvider>
        <Tab/>
        <div>
          이것은 children
        </div>
      </TabProvider>
    </main>
  )
}
