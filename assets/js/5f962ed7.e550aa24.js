"use strict";(self.webpackChunkneutron=self.webpackChunkneutron||[]).push([[635],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=u(n),h=r,m=p["".concat(s,".").concat(h)]||p[h]||c[h]||i;return n?a.createElement(m,l(l({ref:t},d),{},{components:n})):a.createElement(m,l({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},852:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const i={},l="ICQ Relayer",o={unversionedId:"relaying/icq-relayer",id:"relaying/icq-relayer",title:"ICQ Relayer",description:"Overview",source:"@site/docs/relaying/icq-relayer.md",sourceDirName:"relaying",slug:"/relaying/icq-relayer",permalink:"/relaying/icq-relayer",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"IBC Relayer",permalink:"/relaying/ibc-relayer"},next:{title:"Setting up target chain",permalink:"/relaying/target-chain"}},s={},u=[{value:"Overview",id:"overview",level:2},{value:"Queries gathering",id:"queries-gathering",level:3},{value:"Queries execution",id:"queries-execution",level:3},{value:"Results submission",id:"results-submission",level:3},{value:"A bit of technical details about TX submission",id:"a-bit-of-technical-details-about-tx-submission",level:4},{value:"Configuration",id:"configuration",level:2},{value:"Neutron node settings",id:"neutron-node-settings",level:3},{value:"Target chain node settings",id:"target-chain-node-settings",level:3},{value:"Relayer application settings",id:"relayer-application-settings",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setting up Relayer wallet",id:"setting-up-relayer-wallet",level:3},{value:"Running the Relayer",id:"running-the-relayer",level:2}],d={toc:u};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"icq-relayer"},"ICQ Relayer"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/neutron/interchain-queries/overview"},"Interchain Queries")," allow smart contracts to make queries to a remote chain. An ICQ Relayer is a required component for making them possible. It acts as a facilitator between the Neutron chain and a querying chain, gathering queries that are needed to be performed from the Neutron, actually performing them, and eventually making the results available for the Neutron's smart contracts. These three main responsibilities are described in details below."),(0,r.kt)("p",null,"If you are a smart contracts developer and up to develop your dApp on Neutron, you will most likely need your own ICQ Relayer to manage your Interchain Queries. "),(0,r.kt)("h3",{id:"queries-gathering"},"Queries gathering"),(0,r.kt)("p",null,"All registered Interchain Queries and their parameters are stored in the eponymous module and available by its ",(0,r.kt)("a",{parentName:"p",href:"/neutron/interchain-queries/client#queries"},"query interface"),". The Relayer utilises the module's interface in order to initialise the performing list of queries. This is how the Relayer maintains the list of queries to be executed:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"on initialisation, the ICQ module ",(0,r.kt)("inlineCode",{parentName:"li"},"RegisteredQueries")," query is executed with the ",(0,r.kt)("inlineCode",{parentName:"li"},"RELAYER_REGISTRY_ADDRESSES")," parameter used for the ",(0,r.kt)("inlineCode",{parentName:"li"},"Owners")," field;"),(0,r.kt)("li",{parentName:"ul"},"during the rest of the run, the Relayer listens to the ICQ module's ",(0,r.kt)("inlineCode",{parentName:"li"},"query_update")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"query_removed")," ",(0,r.kt)("a",{parentName:"li",href:"/neutron/interchain-queries/events"},"events")," and modifies the queries list and parameters correspondingly.")),(0,r.kt)("p",null,"The Relayer also listens to the Neutron's ",(0,r.kt)("inlineCode",{parentName:"p"},"NewBlockHeader")," events that are used as a trigger for queries execution. Since each query has its own ",(0,r.kt)("inlineCode",{parentName:"p"},"update_period"),", the Relayer tracks queries execution height and executes only the queries which update time has come."),(0,r.kt)("h3",{id:"queries-execution"},"Queries execution"),(0,r.kt)("p",null,"When the update time comes for a query, the Relayer runs the specified query on the remote chain:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"in case of a KV-query, the Relayer just ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/neutron-org/cosmos-query-relayer/blob/4542045ab24d2735890e70d4dc525677d5f30c8a/internal/proof/proof_impl/get_storage_values.go#L11"},"reads"),"\nnecessary KV-keys from the remote chain's storage with ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/blob/ae77f0080a724b159233bd9b289b2e91c0de21b5/docs/interfaces/lite/specification.md"},"Merkle Proofs"),". Neutron will need these proofs to ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/neutron-org/neutron/blob/49c33ff43122cb12ee20e98493e0e2439a94f928/x/interchainqueries/keeper/msg_server.go#L217"},"verify")," validity of KV-results on results submission;"),(0,r.kt)("li",{parentName:"ul"},"in case of a TX-query, the Relayer makes a query to the target chain's ",(0,r.kt)("a",{parentName:"li",href:"https://docs.tendermint.com/v0.33/app-dev/indexing-transactions.html#querying-transactions"},"Tendermint RPC"),"\nto search transactions by message types, events and attributes which were emitted during transactions execution and were\n",(0,r.kt)("a",{parentName:"li",href:"https://docs.tendermint.com/v0.33/app-dev/indexing-transactions.html"},"indexed")," by Tendermint. More about Tx query parameters syntax ",(0,r.kt)("a",{parentName:"li",href:"/neutron/interchain-queries/messages#register-interchain-query"},"in the dedicated section"),". When Relayer submits transactions search results to Neutron chain, it ",(0,r.kt)("strong",{parentName:"li"},"DOES NOT")," include events into result (even if events were used for the query), because ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tendermint/tendermint/blob/bff63aec83a4cfbb3bba253cfa04737fb21dacb4/types/results.go#L47"},"events are not deterministic"),", therefore they can break blockchain consensus. One more important thing about TX queries is that the Relayer is made the way it only searches for and submits transactions within the target chain's trusting period. The trusting period is usually calculated as ",(0,r.kt)("inlineCode",{parentName:"li"},"2/3 * unbonding_period"),", but a concrete chain can set it to any value. This limitation comes from ",(0,r.kt)("a",{parentName:"li",href:"https://blog.cosmos.network/light-clients-in-tendermint-consensus-1237cfbda104"},"Tendermint Light Clients"),".")),(0,r.kt)("h3",{id:"results-submission"},"Results submission"),(0,r.kt)("p",null,"Relayer submits a query result as the following depending on the Relayer's configuration:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"simply sending it to the Neutron's Interchain Queries module which handles it by storing the result in the blockchain state (KV queries with ",(0,r.kt)("inlineCode",{parentName:"li"},"RELAYER_ALLOW_KV_CALLBACKS"),"=false);"),(0,r.kt)("li",{parentName:"ul"},"sending it to the Neutron's Interchain Queries module which handles it by storing the result in the blockchain state and passing the result to the owner smart contract (KV queries with ",(0,r.kt)("inlineCode",{parentName:"li"},"RELAYER_ALLOW_KV_CALLBACKS"),"=true);"),(0,r.kt)("li",{parentName:"ul"},"passing it to the smart contract that has registered the query (TX queries).")),(0,r.kt)("p",null,"This means that it's the Relayer who pays gas for these actions. Note that KV queries submission are straightforward and therefore cheap whereas TX ones and KV callbacks also include smart contract call and their cost may vary significantly."),(0,r.kt)("h4",{id:"a-bit-of-technical-details-about-tx-submission"},"A bit of technical details about TX submission"),(0,r.kt)("p",null,"The KV queries are submitted in a fire-and-forget way, i.e. they are submitted once per ",(0,r.kt)("inlineCode",{parentName:"p"},"update_period")," span and never retried forcibly (e.g. on a submission error). The TX queries are a bit more tricky: since they are not stored in the Neutron chain and simply passed to smart contracts, it's needed that each tx is passed and handled by the smart contract only once. The Relayer uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"BroadcastTxSync")," messages broadcast type to maintain balance between performance and submission detalisation, but this means that the submission result is not waited for. To achieve both submission speed and only one submission handling, the Relayer fires submission messages, remembers the query result as sent, and then in the background retrieves the submission result for the query. If it turns to be a success, the TX is saved as fully processed and will not be sent to the smart contract again. Otherwise, this tx will be marked as failed and will not be sent to the smart contract again during this run. Instead, to prevent repeated submission of transactions which can't be successfully handled by the smart contract, the retry will only be possible on Relayer restart."),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"This section contains description for all the possible config values that the Relayer supports. For example values see the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/neutron-org/neutron-query-relayer/blob/main/.env.example"},".env.example")," file in the Relayer's repository."),(0,r.kt)("h3",{id:"neutron-node-settings"},"Neutron node settings"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"RELAYER_NEUTRON_CHAIN_RPC_ADDR")," \u2014 RPC address of a Neutron node to interact with (e.g. get events and to submit results);"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"RELAYER_NEUTRON_CHAIN_REST_ADDR")," \u2014 REST address of a Neutron node to interact with (e.g. get registered queries list);"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"RELAYER_NEUTRON_CHAIN_CHAIN_ID")," \u2014 Neutron chain ID;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"RELAYER_NEUTRON_CHAIN_HOME_DIR")," \u2014 path to keys directory;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"RELAYER_NEUTRON_CHAIN_SIGN_KEY_NAME")," \u2014 name of the key pair to be used by the Relayer;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"RELAYER_NEUTRON_CHAIN_TIMEOUT")," \u2014 timeout for Neutron RPC calls;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"RELAYER_NEUTRON_CHAIN_GAS_PRICES")," \u2014 the price for a unit of gas used by the Relayer;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"RELAYER_NEUTRON_CHAIN_GAS_LIMIT")," \u2014 the maximum price to be paid for a single submission;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"RELAYER_NEUTRON_CHAIN_GAS_ADJUSTMENT")," \u2014 gas multiplier used in order to avoid underestimating;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"RELAYER_NEUTRON_CHAIN_CONNECTION_ID")," \u2014 Neutron chain connection ID;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"RELAYER_NEUTRON_CHAIN_CLIENT_ID")," \u2014 IBC client ID for an IBC connection between the Neutron chain and the target chain;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"RELAYER_NEUTRON_CHAIN_DEBUG")," \u2014 flag to run neutron chain provider in debug mode;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"RELAYER_NEUTRON_CHAIN_KEYRING_BACKEND")," \u2014 described ",(0,r.kt)("a",{parentName:"li",href:"https://docs.cosmos.network/master/run-node/keyring.html#the-kwallet-backend"},"here"),";"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"RELAYER_NEUTRON_CHAIN_OUTPUT_FORMAT")," \u2014 Neutron chain provider output format;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"RELAYER_NEUTRON_CHAIN_SIGN_MODE_STR")," \u2014 described ",(0,r.kt)("a",{parentName:"li",href:"https://docs.cosmos.network/master/core/transactions.html#signing-transactions"},"here"),", also consider use short variation, e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"direct"),".")),(0,r.kt)("h3",{id:"target-chain-node-settings"},"Target chain node settings"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"RELAYER_TARGET_CHAIN_RPC_ADDR")," \u2014 RPC address of a target chain node to interact with (e.g. send queries);"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"RELAYER_TARGET_CHAIN_CHAIN_ID")," \u2014 target chain ID;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"RELAYER_TARGET_CHAIN_ACCOUNT_PREFIX")," \u2014 target chain account prefix;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"RELAYER_TARGET_CHAIN_VALIDATOR_ACCOUNT_PREFIX")," \u2014 target chain validator account prefix;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"RELAYER_TARGET_CHAIN_TIMEOUT")," \u2014 timeout for target chain RPC calls;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"RELAYER_TARGET_CHAIN_CONNECTION_ID")," \u2014 target chain connection ID;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"RELAYER_TARGET_CHAIN_CLIENT_ID")," \u2014 IBC client ID for an IBC connection between the Neutron chain and the target chain;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"RELAYER_TARGET_CHAIN_DEBUG")," \u2014 flag to run neutron chain provider in debug mode;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"RELAYER_TARGET_CHAIN_OUTPUT_FORMAT")," \u2014 target chain provider output format.")),(0,r.kt)("h3",{id:"relayer-application-settings"},"Relayer application settings"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"RELAYER_REGISTRY_ADDRESSES")," \u2014 a list of comma-separated smart-contract addresses (registered query owners) for which the Relayer processes interchain queries. If empty, literally all registered queries are processed which is usable if you are up to deploy a public Relayer;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"RELAYER_ALLOW_TX_QUERIES")," \u2014 if true, Relayer will process tx queries (if ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),", Relayer will ignore them). A true value here is mostly usable for a private Relayer because TX queries submission is quite expensive;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"RELAYER_ALLOW_KV_CALLBACKS")," \u2014 if ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),", will pass proofs as sudo callbacks to contracts. A true value here is mostly usable for a private Relayer because KV query callbacks execution is quite expensive. If false, results will simply be submitted to Neutron and become available for smart contracts retrieval;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"RELAYER_MIN_KV_UPDATE_PERIOD")," \u2014 minimal period of queries execution and submission. This value is usable for a public Relayer as a rate limiter because it roughly overrides the queries ",(0,r.kt)("inlineCode",{parentName:"li"},"update_period")," and force queries execution not more often than ",(0,r.kt)("inlineCode",{parentName:"li"},"N")," blocks;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"RELAYER_STORAGE_PATH")," \u2014 path to leveldb storage, will be created on the given path if it doesn't exist. It is required if ",(0,r.kt)("inlineCode",{parentName:"li"},"RELAYER_ALLOW_TX_QUERIES")," is ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),";"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"RELAYER_CHECK_SUBMITTED_TX_STATUS_DELAY")," \u2014 delay in seconds between TX query submission and the result handling checking (more about this in the ",(0,r.kt)("a",{parentName:"li",href:"#a-bit-of-technical-details-about-tx-submission"},"TX submission section"),");"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"RELAYER_QUERIES_TASK_QUEUE_CAPACITY")," \u2014 capacity of the channel that is used to send messages from subscriber to Relayer. Better set to a higher value to avoid problems with Tendermint websocket subscriptions;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"RELAYER_PROMETHEUS_PORT")," \u2014 the port on which Prometheus metrics API is available.")),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"Before running the Relayer application for production purposes, you need to create a wallet for the Relayer, top it up, and set up the configuration (refer to the ",(0,r.kt)("a",{parentName:"p",href:"#configuration"},"Configuration")," section). Also you will most likely need to deploy your own RPC nodes of Neutron and the chain of interest."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/neutron/build"},"How to deploy your own Neutron RPC node"),";"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/relaying/target-chain"},"How to how to prepare a target chain RPC node for Relayer's usage"),".")),(0,r.kt)("h3",{id:"setting-up-relayer-wallet"},"Setting up Relayer wallet"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The keyring folder for Relayer's usage is configured by the ",(0,r.kt)("inlineCode",{parentName:"li"},"RELAYER_NEUTRON_CHAIN_HOME_DIR")," variable. The easiest way is to run ",(0,r.kt)("inlineCode",{parentName:"li"},"neutrond keys")," from the cloned ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/neutron-org/neutron"},"neutron repository")," and get the default value from the ",(0,r.kt)("inlineCode",{parentName:"li"},"--keyring-dir")," flag:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"neutrond keys\nKeyring management commands. These keys may be in any format supported by the\nTendermint crypto library and can be used by light-clients, full nodes, or any other application\nthat needs to sign with a private key.\n...\nFlags:\n      --keyring-dir string       The client Keyring directory; if omitted, the default 'home' directory will be used\n...\nGlobal Flags:\n      --home string         directory for config and data (default \"/Users/your-user/.neutrond\")\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Then execute ",(0,r.kt)("inlineCode",{parentName:"li"},"neutrond keys add relayer --keyring-backend test")," to create an account in the default keyring directory;"),(0,r.kt)("li",{parentName:"ol"},"Use ",(0,r.kt)("inlineCode",{parentName:"li"},"relayer")," as the ",(0,r.kt)("inlineCode",{parentName:"li"},"RELAYER_NEUTRON_CHAIN_SIGN_KEY_NAME"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"test")," as the ",(0,r.kt)("inlineCode",{parentName:"li"},"RELAYER_NEUTRON_CHAIN_KEYRING_BACKEND"),", and pass the keyring directory as a volume to the Relayer's docker container using the keyring path in the container as the ",(0,r.kt)("inlineCode",{parentName:"li"},"RELAYER_NEUTRON_CHAIN_HOME_DIR"),";"),(0,r.kt)("li",{parentName:"ol"},"Get the Relayer's wallet address and top its balance up. If you're running the Relayer on the testnet, use the official Neutron faucet. For the mainnet, get some NTRN for the address.")),(0,r.kt)("h2",{id:"running-the-relayer"},"Running the Relayer"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Make sure you've finished the ",(0,r.kt)("a",{parentName:"li",href:"#configuration"},"Configuration")," part;"),(0,r.kt)("li",{parentName:"ol"},"Build Relayer's docker image from the Relayer's folder:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"make build-docker\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Run Relayer in a docker container way:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker run --env-file .env.example -p 9999:9999 neutron-org/neutron-query-relayer\n")),(0,r.kt)("p",null,"Notes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-p 9999:9999")," exposes the port that allows access to the Relayer's metrics powered using Prometheus. The container's port will be the same as the ",(0,r.kt)("inlineCode",{parentName:"li"},"RELAYER_PROMETHEUS_PORT")," value that is ",(0,r.kt)("inlineCode",{parentName:"li"},"9999")," by default. Use another value if you are up to use a different port;"),(0,r.kt)("li",{parentName:"ul"},"add keyring passing to the volumes list. For example, assign ",(0,r.kt)("inlineCode",{parentName:"li"},"RELAYER_NEUTRON_CHAIN_HOME_DIR=/keyring")," and run the app as:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker run --env-file .env.example -v /Users/your-user/.neutrond:/keyring -p 9999:9999 neutron-org/neutron-query-relayer\n")))}c.isMDXComponent=!0}}]);