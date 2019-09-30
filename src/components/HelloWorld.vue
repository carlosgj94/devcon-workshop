<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      <h3 id="happy-message">Let the hunger games begin</h3>
    </p>
    <h4>Buy a ticket</h4>
    <p>
      <p class="email">Email: </p>
      <input
        id="email-box"
        v-model="email"
        type="text"/>
    </p>
    <p>
      <button
        id="pay-button"
        class="bubbly-button"
        @click="buyTicket()">
        Actually buy me
      </button>
    </p>
    <p
      v-if="message === 'success'"
      class="success-message">
      Ticket bought successfully!
    </p>

    <p
      v-if="message === 'error'"
      class="error-message">
      Heyy! What happened?
    </p>
    <p
      v-if="message === 'email'"
      class="error-message">
      You forgot your email :)
    </p>

  </div>
</template>

<script>
import Web3 from 'web3';

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data() {
    return {
      web3: undefined,
      message: undefined,
      email: undefined,
      accounts: undefined,
    };
  },
  watch: {
    message() {
      if (this.message) {
        setTimeout(() => {
          this.message = undefined;
        }, 7000);
      }
    },
  },
  async mounted() {
    if (this.metamaskInstalled()) {
      this.web3 = new Web3(ethereum);
      await ethereum.enable();
      this.accounts = await this.web3.eth.getAccounts();
    }
  },
  methods: {
    metamaskInstalled() {
      if (typeof window.ethereum !== 'undefined') return true;
      return false;
    },
    async buyTicket() {
      if (this.email) {
        this.accounts = await this.web3.eth.getAccounts();
        this.web3.eth.sendTransaction(
          {
            from: this.accounts[0],
            to: '0x11573ccD66e62509d160374c709C2c7bC3d97528',
            value: '10000000000000',
          }, (err, transactionHash) => {
            if (!err) {
              console.log(`${transactionHash} success`);
              this.message = 'success';
            } else {
              this.message = 'error';
            }
          },
        );
      } else this.message = 'email';
    },
  },
};
</script>

<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
h4 {
  margin: 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.email {
  margin-top: 20px;
}
#eth-amount {
  border-radius: 2px;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  outline: none;
  border: 1px solid black;
  height: 25px;
  line-height: 25px;
  font-size: 16px;
  padding: 0;
  -webkit-appearance: none;
  appearance: none;
  -moz-appearance:textfield;
}
$fuschia: black;
$button-bg: $fuschia;
$button-text-color: #fff;
$baby-blue: #f8faff;
.bubbly-button{
  font-family: 'Helvetica', 'Arial', sans-serif;
  display: inline-block;
  font-size: 1em;
  padding: 1em 2em;
  margin-top: 30px;
  margin-bottom: 60px;
  -webkit-appearance: none;
  appearance: none;
  background-color: $button-bg;
  color: $button-text-color;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  position: relative;
  transition: transform ease-in 0.1s, box-shadow ease-in 0.25s;
  box-shadow: 0 2px 25px rgba(0, 0, 0, 0.5);

  &:focus {
    outline: 0;
  }

  &:before, &:after{
    position: absolute;
    content: '';
    display: block;
    width: 140%;
    height: 100%;
    left: -20%;
    z-index: -1000;
    transition: all ease-in-out 0.5s;
    background-repeat: no-repeat;
  }

  &:before{
    display: none;
    top: -75%;
    background-image:
      radial-gradient(circle, $button-bg 20%, transparent 20%),
    radial-gradient(circle,  transparent 20%, $button-bg 20%, transparent 30%),
    radial-gradient(circle, $button-bg 20%, transparent 20%),
    radial-gradient(circle, $button-bg 20%, transparent 20%),
    radial-gradient(circle,  transparent 10%, $button-bg 15%, transparent 20%),
    radial-gradient(circle, $button-bg 20%, transparent 20%),
    radial-gradient(circle, $button-bg 20%, transparent 20%),
    radial-gradient(circle, $button-bg 20%, transparent 20%),
    radial-gradient(circle, $button-bg 20%, transparent 20%);
background-size: 10% 10%, 20% 20%, 15% 15%, 20% 20%, 18% 18%, 10% 10%, 15% 15%, 10% 10%, 18% 18%;
  }

  &:after{
    display: none;
    bottom: -75%;
    background-image:
    radial-gradient(circle, $button-bg 20%, transparent 20%),
    radial-gradient(circle, $button-bg 20%, transparent 20%),
    radial-gradient(circle,  transparent 10%, $button-bg 15%, transparent 20%),
    radial-gradient(circle, $button-bg 20%, transparent 20%),
    radial-gradient(circle, $button-bg 20%, transparent 20%),
    radial-gradient(circle, $button-bg 20%, transparent 20%),
    radial-gradient(circle, $button-bg 20%, transparent 20%);
  background-size: 15% 15%, 20% 20%, 18% 18%, 20% 20%, 15% 15%, 10% 10%, 20% 20%;
  //background-position: 5% 90%, 10% 90%, 10% 90%, 15% 90%, 25% 90%, 25% 90%, 40% 90%, 55% 90%, 70% 90%;
  }

  &:active{
    transform: scale(0.9);
    background-color: darken($button-bg, 5%);
    box-shadow: 0 2px 25px rgba(255, 0, 130, 0.2);
  }

  &.animate{
    &:before{
      display: block;
      animation: topBubbles ease-in-out 0.75s forwards;
    }
    &:after{
      display: block;
      animation: bottomBubbles ease-in-out 0.75s forwards;
    }
  }
}


@keyframes topBubbles {
  0%{
    background-position: 5% 90%, 10% 90%, 10% 90%, 15% 90%, 25% 90%, 25% 90%, 40% 90%, 55% 90%, 70% 90%;
  }
    50% {
      background-position: 0% 80%, 0% 20%, 10% 40%, 20% 0%, 30% 30%, 22% 50%, 50% 50%, 65% 20%, 90% 30%;}
 100% {
    background-position: 0% 70%, 0% 10%, 10% 30%, 20% -10%, 30% 20%, 22% 40%, 50% 40%, 65% 10%, 90% 20%;
  background-size: 0% 0%, 0% 0%,  0% 0%,  0% 0%,  0% 0%,  0% 0%;
  }
}

@keyframes bottomBubbles {
  0%{
    background-position: 10% -10%, 30% 10%, 55% -10%, 70% -10%, 85% -10%, 70% -10%, 70% 0%;
  }
  50% {
    background-position: 0% 80%, 20% 80%, 45% 60%, 60% 100%, 75% 70%, 95% 60%, 105% 0%;}
 100% {
    background-position: 0% 90%, 20% 90%, 45% 70%, 60% 110%, 75% 80%, 95% 70%, 110% 10%;
  background-size: 0% 0%, 0% 0%,  0% 0%,  0% 0%,  0% 0%,  0% 0%;
  }
}

.error-message {
  color: red;
  font-weight: bold;
}

.success-message {
  color: lime;
  font-weight: bold;
}
</style>
