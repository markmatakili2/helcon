# HELCON

Helcon is a decentralized healthcare ecosystem built on the Internet Computer (ICP) blockchain. It provides a secure and efficient platform for users to manage healthcare transactions, access medical services, and store health data with privacy and security. This project leverages blockchain technology to ensure transparency, trust, and decentralization in the healthcare sector.

## Features

- **Decentralized Healthcare Services**: Secure and efficient transactions for healthcare services.
- **Escrow System**: Ensures trust between patients and healthcare providers.
- **Internet Identity Integration**: Secure authentication using Internet Identity.
- **Data Monetization**: Users can opt-in to share data with research organizations for incentives.
- **Subscription Model**: Multiple tiers for accessing premium healthcare services.
- **Ad Revenue Model**: Monetization through targeted healthcare advertisements.

## Technology Stack

Helcon is built using the following technologies:

### Backend
- **Rust**: Used for writing smart contracts (canisters) on the Internet Computer.

### Frontend
- **React.js**: Frontend framework for user interaction.
- **Tailwind CSS**: UI styling for a modern and responsive design.

### Deployment
- **DFINITY SDK**: Tooling for deploying and managing canisters on the ICP network.
- **ICP Blockchain**: Hosting of smart contracts and decentralized services.

## Getting Started

### Prerequisites

To run Helcon locally, ensure you have the following installed:

- [DFINITY SDK](https://internetcomputer.org/docs/current/developer-docs/setup/install)
- [Node.js](https://nodejs.org/) (LTS version recommended)
- [Rust](https://www.rust-lang.org/) (for backend development)
- [Git](https://git-scm.com/) (for version control)

### Installation

Clone the repository and navigate to the project directory:

```bash
git clone https://github.com/markmatakili2/helcon.git
cd helcon
```

### Start Local ICP Network

Start the Internet Computer local replica:

```bash
dfx start --background
```

### Deploy Canisters

Deploy the backend and frontend canisters:

```bash
dfx deploy
```

### Run the Frontend

Navigate to the frontend directory and start the development server:

```bash
cd helcon_frontend
npm install
npm start
```

Open your browser and access the application at https://helcon.xyz/ .

## Usage

### User Registration

- Users sign up using Internet Identity.
- After authentication, users can access their dashboard.

### Making Healthcare Transactions

- Users select a healthcare service from listed providers.
- Payment is processed via an escrow system for secure transactions.
- Upon service completion, funds are released to the provider.

### Data Sharing & Monetization

- Users can opt to share anonymized health data with research organizations.
- Incentives are provided for contributing data to medical research.

## Revenue Streams

Helcon generates revenue through:

- **Transaction Fees**: A percentage fee on healthcare transactions.
- **User Subscriptions**: Premium features for subscribed users.
- **Data Monetization**: Selling anonymized user data to research institutions.
- **Advertisements**: Targeted healthcare-related ads.

## Security & Privacy

Helcon prioritizes user data security by:

- Utilizing Internet Identity for authentication.
- Ensuring end-to-end encryption for sensitive health records.
- Implementing smart contract escrow to prevent fraud.

## Contributing

Contributions are welcome! Follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m 'Added feature'
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Submit a pull request.

## License

Helcon is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For inquiries or support, contact:

- **Email**: info.helcon@gmail.com
- **X (Twitter)**: https://x.com/helcon_
- **LinkedIn**: https://www.linkedin.com/company/helcon1/?viewAsMember=true

## Acknowledgments

Special thanks to ICP Hub Kenya for their support and guidance in the development of Helcon.
