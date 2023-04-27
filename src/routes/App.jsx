import { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '@/components/Layout'
import AppProvider from '@/context/AppContext'
import './App.css'

const Home = lazy(() => import('@/Pages/Home'))
const Checkout = lazy(() => import('@/Pages/Checkout'))
const CheckoutInformation = lazy(() => import('@/Pages/CheckoutInformation'))
const CheckoutPayment = lazy(() => import('@/Pages/CheckoutPayment'))
const CheckoutSuccess = lazy(() => import('@/Pages/CheckoutSuccess'))
const NotFound = lazy(() => import('@/Pages/NotFound'))

function App () {
  return (
    <AppProvider>
      <Suspense>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/checkout' element={<Checkout />} />
              <Route path='/checkout/information' element={<CheckoutInformation />} />
              <Route path='/checkout/payment' element={<CheckoutPayment />} />
              <Route path='/checkout/success' element={<CheckoutSuccess />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </Suspense>
    </AppProvider>
  )
}

export default App
