# Queries

```rust
pub enum QueryMsg {
    #[returns(ConfigResponse)]
    Config {},
    #[returns(MerkleRootResponse)]
    MerkleRoot {},
    #[returns(IsClaimedResponse)]
    IsClaimed { address: String },
    #[returns(TotalClaimedResponse)]
    TotalClaimed {},
    // for cross chain airdrops, maps target account to host account
    #[returns(AccountMapResponse)]
    AccountMap { external_address: String },
    #[returns(AccountMapResponse)]
    AllAccountMaps {
        start_after: Option<String>,
        limit: Option<u32>,
    },
    #[returns(IsPausedResponse)]
    IsPaused {},
}
```
