import { defineStore } from 'pinia'
import { ref, reactive, computed } from 'vue'
import Web3 from 'web3'

export const useAuth = defineStore('auth', () => {
  const user = reactive({
    wallet: '',
    balance: 0,
  })

  const isLoaded = ref(false)
  const showMessage = ref(true)

  const auth = async () => {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      try {
        window.ethereum.enable().then(() => {
          console.log('MetaMask connected!')
          authenticate()
        })
      } catch (e) {
        console.log('User denied account access')
      }
    } else {
      alert(
        'You must have a Meta Mask wallet in your browser. Please install it in your Google Chrome.'
      )
    }
  }

  const authenticate = async () => {
    const accounts = await window.web3.eth.getAccounts()

    const address = accounts[0]
    user.wallet = address

    const balance = await window.web3.eth.getBalance(user.wallet)
    user.balance = balance

    isLoaded.value = true

    setTimeout(() => {
      showMessage.value = false
    }, 2000)
  }

  const walletCropped = computed(
    () => `${user.wallet.slice(0, 4)}...${user.wallet.slice(-3)}`
  )
  const balanceRounded = computed(() => (user.balance / 1e18).toFixed(4))

  return {
    user,
    isLoaded,
    showMessage,
    auth,
    authenticate,
    walletCropped,
    balanceRounded,
  }
})
