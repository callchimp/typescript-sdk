# TypeScript SDK for Callchimp API

This TypeScript SDK provides a convenient wrapper for the Callchimp API, allowing developers to easily integrate Callchimp's functionalities into their TypeScript or JavaScript applications.

## Features

- Easy-to-use methods for interacting with the Callchimp API.
- Supports all major functionalities of the Callchimp service.

## Installation

Install the package using npm:

```bash
npm install @dynopii/callchimp
```

Or using yarn:

```bash
yarn add @dynopii/callchimp
```

## Usage

First, import the necessary modules and configure the SDK with your API key:

```typescript
import { CampaignsApi, Configuration } from '@dynopii/callchimp';

const config = new Configuration({
    basePath: "https://api.callchimp.ai/v1",
    apiKey: "YOUR_API_KEY"
});

const campaignsApi = new CampaignsApi(config);
```

### Listing Campaigns

To list all campaigns:

```typescript
async function listCampaigns() {
    try {
        const campaigns = await campaignsApi.campaignsList();
        console.log(campaigns);
    } catch (error) {
        console.error('Error fetching campaigns:', error);
    }
}

listCampaigns();
```

## Documentation

For detailed API documentation and more examples, visit [Callchimp API Documentation](https://api.callchimp.ai).


## License

This SDK is released under the [MIT License](LICENSE).