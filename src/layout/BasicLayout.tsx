import React, { FC } from 'react'
import { NavBar, TabBar } from 'antd-mobile'
import {
  Route,
  Routes,
  useNavigate,
  useLocation,
  MemoryRouter as Router,
} from 'react-router-dom'
import {
  AppOutline,
  MessageOutline,
  UnorderedListOutline,
  UserOutline,
} from 'antd-mobile-icons'

// import styles from './index.less'
import './index.less'
const Bottom: FC = () => {
  // const history = useHistory()
  const location = useLocation()
  const navigate = useNavigate();
  const { pathname } = location

  const setRouteActive = (value: string) => {
    navigate(value)
  }

  const tabs = [
    {
      key: '/home',
      title: '首页',
      icon: <AppOutline />,
    },
    {
      key: '/todo',
      title: '待办',
      icon: <UnorderedListOutline />,
    },
    {
      key: '/message',
      title: '消息',
      icon: <MessageOutline />,
    },
    {
      key: '/me',
      title: '我的',
      icon: <UserOutline />,
    },
  ]

  return (
    <TabBar activeKey={pathname} onChange={value => setRouteActive(value)}>
      {tabs.map(item => (
        <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
      ))}
    </TabBar>
  )
}

export default () => {
  return (
    <Router initialEntries={['/home']}>
      <div className={'app'}>
        <div className={'top'}>
          <NavBar>配合路由使用</NavBar>
        </div>
        <div className={'body'}>
          <Routes>
            <Route path='/home' element={ <Home />} />
            <Route path='/todo' element={ <Todo />} />
            <Route path='/message' element={ <Message />} />
            <Route path='/me' element={ <PersonalCenter />} />
          </Routes>
        </div>
        <div className={'bottom'}>
          <Bottom />
        </div>
      </div>
    </Router>
  )
}

function Home() {
  return <div>首页</div>
}

function Todo() {
  return <div>待办</div>
}

function Message() {
  return <div>消息</div>
}

function PersonalCenter() {
  return <div>我的</div>
}