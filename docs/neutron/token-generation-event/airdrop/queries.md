# Queries

```rust
pub enum QueryMsg {
    Config {},
    MerkleRoot {},
    IsClaimed {
        address: String,
    },
    TotalClaimed {},
    // for cross chain airdrops, maps target account to host account
    AccountMap {
        external_address: String,
    },
    AllAccountMaps {
        start_after: Option<String>,
        limit: Option<u32>,
    },
    IsPaused {},
}
```
