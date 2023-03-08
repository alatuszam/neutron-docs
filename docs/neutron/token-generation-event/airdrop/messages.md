# Messages

## InstantiateMsg

```rust
pub struct InstantiateMsg {
    pub credits_address: String,
    pub reserve_address: String,
    /// MerkleRoot is hex-encoded merkle root.
    pub merkle_root: String,
    /// A point in time from which it is possible to claim airdrops
    pub airdrop_start: Timestamp,
    /// A point in time from which a vesting is configured for cNTRNs. At this point, it is still
    /// possible for users to claim their airdrops.
    pub vesting_start: Timestamp,
    /// Total duration of vesting. At `vesting_start.seconds() + vesting_duration_seconds`
    /// point of time it is no longer possible to claim airdrops. At the very same point of time,
    /// it is possible to withdraw all remaining cNTRNs, exchange them for NTRNs and send to
    /// reserve, using `[ExecuteMsg::WithdrawAll]` message
    pub vesting_duration_seconds: u64,
    pub total_amount: Option<Uint128>,
    /// hrp is the bech32 parameter required for building external network address
    /// from signature message during claim action. example "cosmos", "terra", "juno"
    pub hrp: Option<String>,
}
```

## ExecuteMsg

```rust
pub enum ExecuteMsg {
    /// Claim does not check if contract has enough funds, owner must ensure it.
    Claim {
        amount: Uint128,
        /// Proof is hex-encoded merkle proof.
        proof: Vec<String>,
        /// Enables cross chain airdrops.
        /// Target wallet proves identity by sending a signed [SignedClaimMsg](SignedClaimMsg)
        /// containing the recipient address.
        sig_info: Option<SignatureInfo>,
    },
    /// Permissionless, activated after vesting is over (consult to `[InstantiateMsg]`
    /// documentation for more info). Withdraws all remaining cNTRN tokens, burns them,
    /// receiving NTRN in exchange, and sends all received NTRN's to reserve.
    WithdrawAll {},
    Pause {},
    Resume {},
}
```
