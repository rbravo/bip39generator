# Bitcoin Seed Generator (BIP39 Last Word Finder)

This tool helps you generate or discover the last (12th or 24th) word of a BIP39 seed phrase, given the previous 11 or 23 words. It is useful for reconstructing or validating a Bitcoin wallet seed, especially for recovery scenarios.

## Features

- **Guided seed generation:** Add words manually or by selecting by letter.
- **Multi-language support:** Choose from several BIP39 wordlists (English, Portuguese, Spanish, French, Italian, Japanese, Chinese, Korean, Czech, etc).
- **Find the last word:** Enter 11 or 23 words and see all valid options for the last word, according to the BIP39 standard.
- **Works fully offline:** No data is sent to any server. All processing happens locally in your browser.

## How to Use

1. **Download this repository** to your computer or a secure device.
2. **Open the `index.html` file** in your preferred browser (recommended: Firefox, Chrome, Brave, Edge).
3. **Select your desired wordlist language.**
4. **Add your seed words** (manually or using the selectors).
5. **View the valid options** for the last word of your seed.
6. **Copy the complete seed** for use in your wallet.

> **Important:**  
> Always use this tool in a secure, offline environment, especially if you are working with real wallet seeds.

## Security Notice

- **100% offline:** No information is transmitted over the internet.
- **Open source:** You can audit, modify, and run the code on any device.
- **Manual seed generation warning:**  
  Generating a seed phrase manually (especially by picking words yourself) can result in a weak or easily guessable private key. For maximum security, always use a trusted hardware wallet or a well-reviewed wallet app to generate your seed phrase with proper randomness.

## About BIP39

[BIP39](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki) defines how mnemonic seed phrases are generated and validated for Bitcoin and other cryptocurrencies. The last word of the seed is determined by a checksum, so only certain words are valid as the final word.

---

**This project is for educational and recovery purposes only. Use at