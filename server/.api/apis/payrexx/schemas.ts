const CancelAWaitingTransaction = {
  metadata: {
    allOf: [
      {
        type: "object",
        properties: {
          id: {
            type: "integer",
            format: "int32",
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: "https://json-schema.org/draft/2020-12/schema#",
            description: "ID of transaction to cancel.",
          },
        },
        required: ["id"],
      },
      {
        type: "object",
        properties: {
          instance: {
            type: "string",
            $schema: "https://json-schema.org/draft/2020-12/schema#",
            description: "Your Payrexx instance name.",
          },
        },
        required: ["instance"],
      },
    ],
  },
  response: {
    "200": {
      type: "object",
      properties: {
        status: { type: "string", examples: ["success"] },
        data: {
          type: "array",
          items: {
            type: "object",
            properties: {
              id: { type: "integer", default: 0, examples: [377] },
              uuid: { type: "string", examples: ["2639f2f9"] },
              referenceId: { type: "string", examples: [""] },
              time: { type: "string", examples: ["2024-10-18 17:22:29"] },
              status: { type: "string", examples: ["cancelled"] },
              lang: { type: "string", examples: ["de"] },
              psp: { type: "string", examples: ["Native_PSP"] },
              amount: { type: "integer", default: 0, examples: [10000] },
              contact: {
                type: "object",
                properties: {
                  id: { type: "integer", default: 0, examples: [48] },
                  uuid: { type: "string", examples: ["735611ef"] },
                  title: { type: "string", examples: [""] },
                  firstname: { type: "string", examples: ["Max"] },
                  lastname: { type: "string", examples: ["Muster"] },
                  company: { type: "string", examples: [""] },
                  street: { type: "string", examples: ["Allmednstrasse"] },
                  zip: { type: "string", examples: ["3608"] },
                  place: { type: "string", examples: ["Thun"] },
                  country: { type: "string", examples: ["Schweiz"] },
                  countryISO: { type: "string", examples: ["CH"] },
                  phone: { type: "string", examples: [""] },
                  email: { type: "string", examples: ["max.muster@gmail.com"] },
                  date_of_birth: { type: "string", examples: [""] },
                  delivery_title: { type: "string", examples: [""] },
                  delivery_firstname: { type: "string", examples: [""] },
                  delivery_lastname: { type: "string", examples: [""] },
                  delivery_company: { type: "string", examples: [""] },
                  delivery_street: { type: "string", examples: [""] },
                  delivery_zip: { type: "string", examples: [""] },
                  delivery_place: { type: "string", examples: [""] },
                  delivery_country: { type: "string", examples: [""] },
                  delivery_countryISO: { type: "string", examples: [""] },
                },
              },
            },
          },
        },
      },
      $schema: "https://json-schema.org/draft/2020-12/schema#",
    },
    "404": {
      type: "object",
      properties: {
        status: { type: "string", examples: ["error"] },
        message: {
          type: "string",
          examples: [
            "An error occurred: No Transaction found with id 377 and status: waiting",
          ],
        },
      },
      $schema: "https://json-schema.org/draft/2020-12/schema#",
    },
  },
} as const;
const CaptureATransaction = {
  metadata: {
    allOf: [
      {
        type: "object",
        properties: {
          id: {
            type: "integer",
            format: "int32",
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: "https://json-schema.org/draft/2020-12/schema#",
            description: "ID of the transaction to capture.",
          },
        },
        required: ["id"],
      },
      {
        type: "object",
        properties: {
          instance: {
            type: "string",
            $schema: "https://json-schema.org/draft/2020-12/schema#",
            description: "Your Payrexx instance name",
          },
        },
        required: ["instance"],
      },
    ],
  },
  response: {
    "200": {
      type: "object",
      properties: {
        status: { type: "string", examples: ["success"] },
        data: {
          type: "array",
          items: {
            type: "object",
            properties: {
              id: { type: "integer", default: 0, examples: [2] },
              uuid: { type: "string", examples: ["81d545ca"] },
              time: { type: "string", examples: ["2017-10-16 12:29:12"] },
              status: { type: "string", examples: ["confirmed"] },
              lang: { type: "string", examples: ["de"] },
              psp: { type: "string", examples: ["Payrexx_Payments"] },
            },
          },
        },
      },
      $schema: "https://json-schema.org/draft/2020-12/schema#",
    },
  },
} as const;
const ChargeAPreAuthorizedReservedTransaction = {
  body: {
    type: "object",
    properties: {
      amount: {
        type: "integer",
        description: "Amount for charge in cents.",
        format: "int32",
        minimum: -2147483648,
        maximum: 2147483647,
      },
      purpose: { type: "string", description: "The purpose of the charge." },
      referenceId: {
        type: "string",
        description:
          "Reference ID for charged transaction. Will be available in transaction webhook.",
      },
    },
    $schema: "https://json-schema.org/draft/2020-12/schema#",
  },
  metadata: {
    allOf: [
      {
        type: "object",
        properties: {
          id: {
            type: "integer",
            format: "int32",
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: "https://json-schema.org/draft/2020-12/schema#",
            description: "ID of the transaction to charge.",
          },
        },
        required: ["id"],
      },
      {
        type: "object",
        properties: {
          instance: {
            type: "string",
            $schema: "https://json-schema.org/draft/2020-12/schema#",
            description: "Your Payrexx instance name",
          },
        },
        required: ["instance"],
      },
    ],
  },
  response: {
    "200": {
      type: "object",
      properties: {
        status: { type: "string", examples: ["success"] },
        data: {
          type: "array",
          items: {
            type: "object",
            properties: {
              id: { type: "integer", default: 0, examples: [2] },
              uuid: { type: "string", examples: ["81d545ca"] },
              time: { type: "string", examples: ["2017-10-16 12:29:12"] },
              status: { type: "string", examples: ["confirmed"] },
              lang: { type: "string", examples: ["de"] },
              psp: { type: "string", examples: ["Payrexx_Payments"] },
            },
          },
        },
      },
      $schema: "https://json-schema.org/draft/2020-12/schema#",
    },
  },
} as const;
const CreateACashTransaction = {
  body: {
    type: "object",
    required: ["amount", "currency"],
    properties: {
      amount: {
        type: "integer",
        description: "Amount for charge in cents.",
        format: "int32",
        minimum: -2147483648,
        maximum: 2147483647,
      },
      currency: {
        type: "string",
        description: "Currency of payment (ISO code).",
      },
      vatRate: {
        type: "number",
        description: "VAT Rate Percentage",
        format: "float",
        minimum: -3.402823669209385e38,
        maximum: 3.402823669209385e38,
      },
      purpose: { type: "string", description: "The purpose of the payment." },
      fields: {
        properties: {
          email: {
            properties: { value: { type: "string" } },
            required: [],
            type: "object",
          },
          forename: {
            properties: { value: { type: "string" } },
            required: [],
            type: "object",
          },
          surname: {
            properties: { value: { type: "string" } },
            required: [],
            type: "object",
          },
        },
        required: [],
        type: "object",
      },
    },
    $schema: "https://json-schema.org/draft/2020-12/schema#",
  },
  metadata: {
    allOf: [
      {
        type: "object",
        properties: {
          instance: {
            type: "string",
            $schema: "https://json-schema.org/draft/2020-12/schema#",
            description: "Your Payrexx instance name",
          },
        },
        required: ["instance"],
      },
    ],
  },
  response: {
    "200": {
      type: "object",
      properties: {
        status: { type: "string", examples: ["success"] },
        data: {
          type: "array",
          items: {
            type: "object",
            properties: {
              id: { type: "integer", default: 0, examples: [138] },
              uuid: { type: "string", examples: ["65175636"] },
              amount: { type: "integer", default: 0, examples: [1999] },
              referenceId: { type: "string", examples: [""] },
              time: { type: "string", examples: ["2022-09-20 09:45:18"] },
              status: { type: "string", examples: ["confirmed"] },
              lang: { type: "string", examples: ["de"] },
              psp: { type: "string", examples: [""] },
              pspId: {},
              mode: { type: "string", examples: ["LIVE"] },
              metadata: { type: "array", items: {} },
              invoice: {
                type: "object",
                properties: {
                  number: { type: "string", examples: [""] },
                  products: {
                    type: "array",
                    items: {
                      type: "object",
                      properties: {
                        name: { type: "string", examples: [""] },
                        price: {
                          type: "integer",
                          default: 0,
                          examples: [1999],
                        },
                        quantity: {
                          type: "integer",
                          default: 0,
                          examples: [1],
                        },
                        sku: {},
                        vatRate: {},
                      },
                    },
                  },
                  amount: { type: "integer", default: 0, examples: [1999] },
                  discount: {
                    type: "object",
                    properties: {
                      code: {},
                      amount: { type: "integer", default: 0, examples: [0] },
                      percentage: {},
                    },
                  },
                  shippingAmount: {},
                  currency: { type: "string", examples: ["EUR"] },
                  test: { type: "integer", default: 0, examples: [0] },
                  referenceId: { type: "string", examples: [""] },
                  paymentRequestId: {},
                  paymentLink: {},
                },
              },
              refundable: { type: "boolean", default: true, examples: [true] },
              partiallyRefundable: {
                type: "boolean",
                default: true,
                examples: [true],
              },
              contact: {
                type: "object",
                properties: {
                  id: { type: "integer", default: 0, examples: [48] },
                  uuid: { type: "string", examples: ["22bf3913"] },
                  title: { type: "string", examples: [""] },
                  firstname: { type: "string", examples: [""] },
                  lastname: { type: "string", examples: [""] },
                  company: { type: "string", examples: [""] },
                  street: { type: "string", examples: [""] },
                  zip: { type: "string", examples: [""] },
                  place: { type: "string", examples: [""] },
                  country: { type: "string", examples: [""] },
                  countryISO: { type: "string", examples: [""] },
                  phone: { type: "string", examples: [""] },
                  email: { type: "string", examples: [""] },
                  date_of_birth: { type: "string", examples: [""] },
                  delivery_title: { type: "string", examples: [""] },
                  delivery_firstname: { type: "string", examples: [""] },
                  delivery_lastname: { type: "string", examples: [""] },
                  delivery_company: { type: "string", examples: [""] },
                  delivery_street: { type: "string", examples: [""] },
                  delivery_zip: { type: "string", examples: [""] },
                  delivery_place: { type: "string", examples: [""] },
                  delivery_country: { type: "string", examples: [""] },
                  delivery_countryISO: { type: "string", examples: [""] },
                },
              },
              subscription: {},
              pageUuid: {},
              payrexx_fee: { type: "integer", default: 0, examples: [0] },
              payment: {
                type: "object",
                properties: { brand: { type: "string", examples: ["cash"] } },
              },
            },
          },
        },
      },
      $schema: "https://json-schema.org/draft/2020-12/schema#",
    },
  },
} as const;
const CreateADesign = {
  body: {
    type: "object",
    required: ["name"],
    properties: {
      name: { type: "string", description: "Name of the design" },
      default: {
        type: "integer",
        description:
          "Set to 1 if design should be default design. Set to 0 otherwise.",
        default: 0,
        format: "int32",
        minimum: -2147483648,
        maximum: 2147483647,
      },
      fontFamily: {
        type: "string",
        description:
          "Arial, Courier New, Georgia, Open Sans, Times New Roman or Verdana",
      },
      fontSize: {
        type: "integer",
        description: "In pixel",
        format: "int32",
        minimum: -2147483648,
        maximum: 2147483647,
      },
      textColor: { type: "string", description: "Hex code without #" },
      textColorVPOS: { type: "string", description: "Hex code without #" },
      linkColor: { type: "string", description: "Hex code without #" },
      linkHoverColor: { type: "string", description: "Hex code without #" },
      buttonColor: { type: "string", description: "Hex code without #" },
      buttonHoverColor: { type: "string", description: "Hex code without #" },
      background: { type: "string", description: "color or image" },
      backgroundColor: { type: "string", description: "Hex code without #" },
      headerBackground: { type: "string", description: "color or image" },
      headerBackgroundColor: {
        type: "string",
        description: "Hex code without #",
      },
      emailHeaderBackgroundColor: {
        type: "string",
        description: "Hex code without #",
      },
      headerImageShape: {
        type: "string",
        description: "square, rectangular or round",
      },
      useIndividualEmailLogo: {
        type: "integer",
        description: "0 or 1",
        format: "int32",
        minimum: -2147483648,
        maximum: 2147483647,
      },
      logoBackgroundColor: {
        type: "string",
        description: "Hex code without #",
      },
      logoBorderColor: { type: "string", description: "Hex code without #" },
      VPOSGradientColor1: { type: "string", description: "Hex code without #" },
      VPOSGradientColor2: { type: "string", description: "Hex code without #" },
      enableRoundedCorners: {
        type: "integer",
        description: "0 or 1",
        format: "int32",
        minimum: -2147483648,
        maximum: 2147483647,
      },
      VPOSBackground: { type: "string", description: "color or image" },
      headerImage: {
        type: "object",
        description: "CURLFile object",
        properties: {},
      },
      headerImageCustomLink: {
        type: "array",
        description:
          "Link of the header image. Use language ID as array key. Array key 0 or datatype 'string' will be handled as the default value (Will be used for each activated frontend language).",
        items: { type: "string" },
      },
      backgroundImage: {
        type: "object",
        description: "CURLFile object",
        properties: {},
      },
      headerBackgroundImage: {
        type: "object",
        description: "CURLFile object",
        properties: {},
      },
      emailHeaderImage: {
        type: "object",
        description: "CURLFile object",
        properties: {},
      },
      VPOSBackgroundImage: {
        type: "object",
        description: "CURLFile object",
        properties: {},
      },
    },
    $schema: "https://json-schema.org/draft/2020-12/schema#",
  },
  metadata: {
    allOf: [
      {
        type: "object",
        properties: {
          instance: {
            type: "string",
            $schema: "https://json-schema.org/draft/2020-12/schema#",
            description: "Your Payrexx instance name",
          },
        },
        required: ["instance"],
      },
    ],
  },
  response: {
    "200": {
      type: "object",
      properties: {
        status: { type: "string", examples: ["success"] },
        data: {
          type: "array",
          items: {
            type: "object",
            properties: {
              uuid: { type: "string", examples: ["f45aff72"] },
              default: { type: "integer", default: 0, examples: [0] },
              name: { type: "string", examples: ["Example Design (via API)"] },
              fontFamily: { type: "string", examples: ["Arial"] },
              fontSize: { type: "string", examples: ["14"] },
              textColor: { type: "string", examples: ["24363A"] },
              textColorVPOS: { type: "string", examples: ["24363a"] },
              linkColor: { type: "string", examples: ["0074D6"] },
              linkHoverColor: { type: "string", examples: ["2A6496"] },
              buttonColor: { type: "string", examples: ["99CC33"] },
              buttonHoverColor: { type: "string", examples: ["19B8F2"] },
              background: { type: "string", examples: ["color"] },
              backgroundColor: { type: "string", examples: ["F9FAFA"] },
              headerBackground: { type: "string", examples: ["color"] },
              headerBackgroundColor: { type: "string", examples: ["00AFF0"] },
              emailHeaderBackgroundColor: {
                type: "string",
                examples: ["FAFAFA"],
              },
              headerImageShape: { type: "string", examples: ["square"] },
              useIndividualEmailLogo: {
                type: "integer",
                default: 0,
                examples: [0],
              },
              logoBackgroundColor: { type: "string", examples: ["FFFFFF"] },
              logoBorderColor: { type: "string", examples: ["DDDDDD"] },
              VPOSGradientColor1: { type: "string", examples: ["00AFF0"] },
              VPOSGradientColor2: { type: "string", examples: ["00AFF0"] },
              enableRoundedCorners: {
                type: "integer",
                default: 0,
                examples: [1],
              },
              headerImage: { type: "string", examples: ["payrexx-logo.png"] },
              backgroundImage: { type: "string", examples: [""] },
              headerBackgroundImage: { type: "string", examples: [""] },
              emailHeaderImage: { type: "string", examples: [""] },
              headerImageCustomLink: {
                type: "object",
                properties: {
                  "1": { type: "string", examples: ["https://payrexx.com/de"] },
                  "2": { type: "string", examples: ["https://payrexx.com/en"] },
                  "3": { type: "string", examples: ["https://payrexx.com/fr"] },
                  "4": { type: "string", examples: ["https://payrexx.com/it"] },
                  "7": { type: "string", examples: ["https://payrexx.com/en"] },
                  "8": { type: "string", examples: ["https://payrexx.com/en"] },
                  "9": { type: "string", examples: ["https://payrexx.com/en"] },
                  "10": {
                    type: "string",
                    examples: ["https://payrexx.com/en"],
                  },
                  "11": {
                    type: "string",
                    examples: ["https://payrexx.com/en"],
                  },
                  "12": {
                    type: "string",
                    examples: ["https://payrexx.com/en"],
                  },
                  "13": {
                    type: "string",
                    examples: ["https://payrexx.com/en"],
                  },
                  "14": {
                    type: "string",
                    examples: ["https://payrexx.com/en"],
                  },
                },
              },
            },
          },
        },
      },
      $schema: "https://json-schema.org/draft/2020-12/schema#",
    },
  },
} as const;
const CreateAGateway = {
  body: {
    type: "object",
    required: ["amount", "currency"],
    properties: {
      amount: {
        type: "integer",
        description: "Amount of payment in cents.",
        format: "int32",
        minimum: -2147483648,
        maximum: 2147483647,
      },
      vatRate: {
        type: "number",
        description: "VAT Rate Percentage",
        default: null,
        format: "float",
        minimum: -3.402823669209385e38,
        maximum: 3.402823669209385e38,
      },
      currency: {
        type: "string",
        description: "Currency of payment (ISO code).",
      },
      sku: { type: "string", description: "Product stock keeping unit" },
      purpose: { type: "string", description: "The purpose of the payment." },
      successRedirectUrl: {
        type: "string",
        description: "URL to redirect to after successful payment.",
      },
      failedRedirectUrl: {
        type: "string",
        description: "URL to redirect to after failed payment.",
      },
      cancelRedirectUrl: {
        type: "string",
        description: "URL to redirect to after manual cancellation by shopper.",
      },
      basket: {
        type: "array",
        description:
          "List of all products (incl. shipping costs). The sum of all product amounts must match the amount parameter above. Basket products contains name, description, quantity, amount (in cents) and vatRate (in Percent).",
        items: {
          properties: {
            name: {
              type: "array",
              description: "Name of item",
              default: [],
              items: { type: "string" },
            },
            description: {
              type: "array",
              description: "Description of item",
              default: [],
              items: { type: "string" },
            },
            quantity: {
              type: "integer",
              description: "Quantity of item",
              format: "int32",
              minimum: -2147483648,
              maximum: 2147483647,
            },
            amount: {
              type: "integer",
              description: "Amount in cents",
              format: "int32",
              minimum: -2147483648,
              maximum: 2147483647,
            },
            vatRate: {
              type: "number",
              description:
                "VAT rate of item (overrides vatRate of Gateway, can be 0)",
              format: "float",
              minimum: -3.402823669209385e38,
              maximum: 3.402823669209385e38,
            },
          },
          required: ["name", "quantity", "amount"],
          type: "object",
        },
      },
      psp: {
        type: "array",
        description:
          "List of PSPs to provide for payment. If empty all available PSPs are provied.",
        items: {
          type: "integer",
          format: "int32",
          minimum: -2147483648,
          maximum: 2147483647,
        },
      },
      pm: {
        type: "array",
        description: "List of payment mean names to display",
        items: { type: "string" },
      },
      preAuthorization: {
        type: "boolean",
        description:
          "Whether charge payment manually at a later date (type authorization)",
        default: false,
      },
      reservation: {
        type: "boolean",
        description:
          "Whether charge payment manually at a later date (type reservation)",
        default: false,
      },
      referenceId: {
        type: "string",
        description: "An internal reference id used by your system.",
      },
      fields: {
        type: "object",
        description:
          "The contact data fields which should be stored along with payment",
        properties: {
          title: {
            type: "object",
            properties: {
              value: { type: "string", description: "Value of field" },
            },
          },
          forename: {
            type: "object",
            properties: {
              value: { type: "string", description: "Value of field" },
            },
          },
          surname: {
            type: "object",
            properties: {
              value: { type: "string", description: "Value of field" },
            },
          },
          company: {
            type: "object",
            properties: {
              value: { type: "string", description: "Value of field" },
            },
          },
          street: {
            type: "object",
            properties: {
              value: { type: "string", description: "Value of field" },
            },
          },
          postcode: {
            type: "object",
            properties: {
              value: { type: "string", description: "Value of field" },
            },
          },
          place: {
            type: "object",
            properties: {
              value: { type: "string", description: "Value of field" },
            },
          },
          country: {
            type: "object",
            properties: {
              value: { type: "string", description: "Value of field" },
            },
          },
          delivery_title: {
            type: "object",
            properties: {
              value: { type: "string", description: "Value of field" },
            },
          },
          delivery_forename: {
            type: "object",
            properties: {
              value: { type: "string", description: "Value of field" },
            },
          },
          delivery_surname: {
            type: "object",
            properties: {
              value: { type: "string", description: "Value of field" },
            },
          },
          delivery_company: {
            type: "object",
            properties: {
              value: { type: "string", description: "Value of field" },
            },
          },
          delivery_street: {
            type: "object",
            properties: {
              value: { type: "string", description: "Value of field" },
            },
          },
          delivery_postcode: {
            type: "object",
            properties: {
              value: { type: "string", description: "Value of field" },
            },
          },
          delivery_place: {
            type: "object",
            properties: {
              value: { type: "string", description: "Value of field" },
            },
          },
          delivery_country: {
            type: "object",
            properties: {
              value: { type: "string", description: "Value of field" },
            },
          },
          phone: {
            type: "object",
            properties: {
              value: { type: "string", description: "Value of field" },
            },
          },
          email: {
            type: "object",
            properties: {
              value: { type: "string", description: "Value of field" },
            },
          },
          date_of_birth: {
            type: "object",
            properties: {
              value: { type: "string", description: "Value of field" },
            },
          },
          terms: {
            type: "string",
            description:
              "The terms must be accepted if this field is defined in the request",
          },
          privacy_policy: {
            type: "string",
            description:
              "The privacy policy must be accepted if this field is defined in the request",
          },
          custom_field_1: {
            type: "object",
            properties: {
              name: {
                type: "array",
                description: "Name of field",
                items: { type: "string" },
              },
              value: { type: "string", description: "Value of field" },
            },
          },
          custom_field_2: {
            type: "object",
            properties: {
              name: {
                type: "array",
                description: "Name of field",
                items: { type: "string" },
              },
              value: { type: "string", description: "Value of field" },
            },
          },
          custom_field_3: {
            type: "object",
            properties: {
              name: {
                type: "array",
                description: "Name of field",
                items: { type: "string" },
              },
              value: { type: "string", description: "Value of field" },
            },
          },
          custom_field_4: {
            type: "object",
            properties: {
              name: {
                type: "array",
                description: "Name of field",
                items: { type: "string" },
              },
              value: { type: "string", description: "Value of field" },
            },
          },
          custom_field_5: {
            type: "object",
            properties: {
              name: {
                type: "array",
                description: "Name of field",
                items: { type: "string" },
              },
              value: { type: "string", description: "Value of field" },
            },
          },
        },
      },
      concardisOrderId: {
        type: "string",
        description:
          "Only available for Concardis PSP and if the custom ORDERID option is activated in PSP settings in Payrexx administration. This ORDERID will be transferred to the Payengine.",
      },
      skipResultPage: {
        type: "boolean",
        description:
          "Skip result page and directly redirect to success or failed URL",
        default: false,
      },
      chargeOnAuthorization: {
        type: "boolean",
        description:
          'preAuthorization needs to be "true". This will charge the authorization during the first payment.',
        default: false,
      },
      validity: {
        type: "integer",
        description: "Gateway validity in minutes.",
        format: "int32",
        minimum: -2147483648,
        maximum: 2147483647,
      },
      subscriptionState: {
        type: "boolean",
        description:
          "Defines whether the payment should be handled as subscription.",
        default: false,
      },
      subscriptionInterval: { type: "string", description: "Payment interval" },
      subscriptionPeriod: {
        type: "string",
        description: "Duration of the subscription",
      },
      subscriptionCancellationInterval: {
        type: "string",
        description:
          "Defines the period, in which a subscription can be canceled.",
      },
      buttonText: {
        type: "array",
        description: 'Change the default button Text "Pay" to a custom String',
        items: { type: "string" },
      },
      lookAndFeelProfile: {
        type: "string",
        description: "UUID of the look and feel profile to use.",
      },
      successMessage: {
        type: "string",
        description: "Custom success message on result page.",
      },
      qrCodeSessionId: {
        type: "string",
        description:
          "Holds the session ID of a scanned QR code. Only available and needed for Static QR Code with Twint.",
      },
    },
    $schema: "https://json-schema.org/draft/2020-12/schema#",
  },
  metadata: {
    allOf: [
      {
        type: "object",
        properties: {
          instance: {
            type: "string",
            $schema: "https://json-schema.org/draft/2020-12/schema#",
            description: "Your Payrexx instance name",
          },
        },
        required: ["instance"],
      },
    ],
  },
  response: {
    "200": {
      type: "object",
      properties: {
        status: { type: "string", examples: ["success"] },
        data: {
          type: "array",
          items: {
            type: "object",
            properties: {
              id: { type: "integer", default: 0, examples: [1] },
              status: { type: "string", examples: ["waiting"] },
              hash: {
                type: "string",
                examples: ["db8c618c87dc91f100292f6ffd9c5044"],
              },
              referenceId: { type: "string", examples: ["975382"] },
              link: {
                type: "string",
                examples: [
                  "https://demo.payrexx.com/?payment=db8c618c87dc91f100292f6ffd9c5044",
                ],
              },
              invoices: { type: "array", items: {} },
              preAuthorization: { type: "integer", default: 0, examples: [0] },
              reservation: { type: "integer", default: 0, examples: [0] },
              fields: {
                type: "object",
                properties: {
                  title: {
                    type: "object",
                    properties: {
                      active: {
                        type: "boolean",
                        default: true,
                        examples: [false],
                      },
                      mandatory: {
                        type: "boolean",
                        default: true,
                        examples: [true],
                      },
                    },
                  },
                  forename: {
                    type: "object",
                    properties: {
                      active: {
                        type: "boolean",
                        default: true,
                        examples: [false],
                      },
                      mandatory: {
                        type: "boolean",
                        default: true,
                        examples: [true],
                      },
                    },
                  },
                  surname: {
                    type: "object",
                    properties: {
                      active: {
                        type: "boolean",
                        default: true,
                        examples: [false],
                      },
                      mandatory: {
                        type: "boolean",
                        default: true,
                        examples: [true],
                      },
                    },
                  },
                  company: {
                    type: "object",
                    properties: {
                      active: {
                        type: "boolean",
                        default: true,
                        examples: [false],
                      },
                      mandatory: {
                        type: "boolean",
                        default: true,
                        examples: [true],
                      },
                    },
                  },
                  street: {
                    type: "object",
                    properties: {
                      active: {
                        type: "boolean",
                        default: true,
                        examples: [false],
                      },
                      mandatory: {
                        type: "boolean",
                        default: true,
                        examples: [true],
                      },
                    },
                  },
                  postcode: {
                    type: "object",
                    properties: {
                      active: {
                        type: "boolean",
                        default: true,
                        examples: [false],
                      },
                      mandatory: {
                        type: "boolean",
                        default: true,
                        examples: [true],
                      },
                    },
                  },
                  place: {
                    type: "object",
                    properties: {
                      active: {
                        type: "boolean",
                        default: true,
                        examples: [false],
                      },
                      mandatory: {
                        type: "boolean",
                        default: true,
                        examples: [true],
                      },
                    },
                  },
                  country: {
                    type: "object",
                    properties: {
                      active: {
                        type: "boolean",
                        default: true,
                        examples: [false],
                      },
                      mandatory: {
                        type: "boolean",
                        default: true,
                        examples: [true],
                      },
                    },
                  },
                  phone: {
                    type: "object",
                    properties: {
                      active: {
                        type: "boolean",
                        default: true,
                        examples: [false],
                      },
                      mandatory: {
                        type: "boolean",
                        default: true,
                        examples: [true],
                      },
                    },
                  },
                  email: {
                    type: "object",
                    properties: {
                      active: {
                        type: "boolean",
                        default: true,
                        examples: [false],
                      },
                      mandatory: {
                        type: "boolean",
                        default: true,
                        examples: [true],
                      },
                    },
                  },
                  date_of_birth: {
                    type: "object",
                    properties: {
                      active: {
                        type: "boolean",
                        default: true,
                        examples: [false],
                      },
                      mandatory: {
                        type: "boolean",
                        default: true,
                        examples: [true],
                      },
                      names: {
                        type: "object",
                        properties: {
                          de: { type: "string", examples: [""] },
                          en: { type: "string", examples: [""] },
                          fr: { type: "string", examples: [""] },
                          it: { type: "string", examples: [""] },
                        },
                      },
                    },
                  },
                  terms: {
                    type: "object",
                    properties: {
                      active: {
                        type: "boolean",
                        default: true,
                        examples: [true],
                      },
                      mandatory: {
                        type: "boolean",
                        default: true,
                        examples: [true],
                      },
                    },
                  },
                  privacy_policy: {
                    type: "object",
                    properties: {
                      active: {
                        type: "boolean",
                        default: true,
                        examples: [true],
                      },
                      mandatory: {
                        type: "boolean",
                        default: true,
                        examples: [true],
                      },
                    },
                  },
                  text: {
                    type: "object",
                    properties: {
                      active: {
                        type: "boolean",
                        default: true,
                        examples: [false],
                      },
                      mandatory: {
                        type: "boolean",
                        default: true,
                        examples: [true],
                      },
                      names: {
                        type: "object",
                        properties: {
                          de: {
                            type: "string",
                            examples: ["Benutzerdefiniertes Feld (DE)"],
                          },
                          en: {
                            type: "string",
                            examples: ["Benutzerdefiniertes Feld (EN)"],
                          },
                          fr: {
                            type: "string",
                            examples: ["Benutzerdefiniertes Feld (FR)"],
                          },
                          it: {
                            type: "string",
                            examples: ["Benutzerdefiniertes Feld (IT)"],
                          },
                        },
                      },
                    },
                  },
                },
              },
              psp: { type: "array", items: {} },
              pm: { type: "array", items: {} },
              amount: { type: "integer", default: 0, examples: [8925] },
              vatRate: { type: "number", default: 0, examples: [7.7] },
              currency: { type: "string", examples: ["CHF"] },
              sku: { type: "string", examples: ["P01122000"] },
              createdAt: {
                type: "integer",
                default: 0,
                examples: [1475578052],
              },
            },
          },
        },
      },
      $schema: "https://json-schema.org/draft/2020-12/schema#",
    },
  },
} as const;
const CreateANewSubscription = {
  body: {
    type: "object",
    required: [
      "userId",
      "psp",
      "amount",
      "currency",
      "purpose",
      "paymentInterval",
      "period",
      "cancellationInterval",
    ],
    properties: {
      userId: {
        type: "string",
        description: "The contact id you got from webhook.",
      },
      psp: { type: "string", description: "The ID of the psp to use." },
      amount: {
        type: "string",
        description: "The amount of the payment to fire in cents.",
      },
      currency: {
        type: "string",
        description: "The ISO code of the currency of the payment.",
      },
      purpose: {
        type: "string",
        description: "The payment purpose. What is the payer paying for?",
      },
      paymentInterval: {
        type: "string",
        description:
          "The payment interval as string. (see PHP documentation of date interval for format)",
      },
      period: {
        type: "string",
        description:
          "The subscription's period as string. (see PHP documentation of date interval for format)",
      },
      cancellationInterval: {
        type: "string",
        description:
          "The interval of cancellation as string. (see PHP documentation of date interval for format)",
      },
      referenceId: {
        type: "string",
        description:
          "The internal reference id. (Will be sent back with Webhook, can be used as identification)",
      },
      vatRate: { type: "string", description: "VAT Rate Percentage" },
    },
    $schema: "https://json-schema.org/draft/2020-12/schema#",
  },
  metadata: {
    allOf: [
      {
        type: "object",
        properties: {
          instance: {
            type: "string",
            $schema: "https://json-schema.org/draft/2020-12/schema#",
            description: "Your Payrexx instance name",
          },
        },
        required: ["instance"],
      },
    ],
  },
  response: {
    "200": {
      type: "object",
      properties: {
        status: { type: "string", examples: ["success"] },
        data: {
          type: "array",
          items: {
            type: "object",
            properties: {
              id: { type: "integer", default: 0, examples: [1] },
              status: { type: "string", examples: ["active"] },
              start: { type: "string", examples: ["2014-12-18"] },
              end: {},
              valid_until: { type: "string", examples: ["2015-01-18"] },
              invoice: {
                type: "object",
                properties: {
                  number: { type: "string", examples: ["Test subscription"] },
                  amount: { type: "integer", default: 0, examples: [1] },
                  currency: { type: "string", examples: ["CHF"] },
                  referenceId: { type: "string", examples: [""] },
                  paymentRequestId: {},
                  paymentLink: {},
                },
              },
              contact: {
                type: "object",
                properties: {
                  id: { type: "integer", default: 0, examples: [1] },
                  title: { type: "string", examples: [""] },
                  firstname: { type: "string", examples: [""] },
                  lastname: { type: "string", examples: [""] },
                  company: { type: "string", examples: [""] },
                  street: { type: "string", examples: [""] },
                  zip: { type: "string", examples: [""] },
                  place: { type: "string", examples: [""] },
                  country: { type: "string", examples: [""] },
                  countryISO: { type: "string", examples: [""] },
                  phone: { type: "string", examples: [""] },
                  email: { type: "string", examples: ["user@example.com"] },
                  date_of_birth: { type: "string", examples: [""] },
                },
              },
            },
          },
        },
      },
      $schema: "https://json-schema.org/draft/2020-12/schema#",
    },
  },
} as const;
const CreateAPage = {
  body: {
    type: "object",
    required: ["title", "description", "psp"],
    properties: {
      title: {
        type: "string",
        description:
          "This is the page title which will be shown on the payment page.",
      },
      description: {
        type: "string",
        description:
          "This is a description which will be shown on the payment page.",
      },
      psp: {
        type: "array",
        description: "The psp which should be used for the payment.",
        items: {
          type: "integer",
          format: "int32",
          minimum: -2147483648,
          maximum: 2147483647,
        },
      },
      currency: {
        type: "string",
        description: "The ISO code of the currency.",
      },
      products: {
        type: "array",
        items: {
          properties: {
            purpose: { type: "string" },
            amount: {
              type: "integer",
              description: "Amount in cents",
              format: "int32",
              minimum: -2147483648,
              maximum: 2147483647,
            },
          },
          type: "object",
        },
      },
      fields: {
        type: "array",
        description:
          "The contact data fields which should be displayed. See fields for more",
        items: {
          properties: {
            title: {
              type: "object",
              properties: {
                value: { type: "string", description: "Value of field" },
              },
            },
            forename: {
              type: "object",
              properties: {
                value: { type: "string", description: "Value of field" },
              },
            },
            surname: {
              type: "object",
              properties: {
                value: { type: "string", description: "Value of field" },
              },
            },
            company: {
              type: "object",
              properties: {
                value: { type: "string", description: "Value of field" },
              },
            },
            street: {
              type: "object",
              properties: {
                value: { type: "string", description: "Value of field" },
              },
            },
            postcode: {
              type: "object",
              properties: {
                value: { type: "string", description: "Value of field" },
              },
            },
            place: {
              type: "object",
              properties: {
                value: { type: "string", description: "Value of field" },
              },
            },
            country: {
              type: "object",
              properties: {
                value: { type: "string", description: "Value of field" },
              },
            },
            delivery_title: {
              type: "object",
              properties: {
                value: { type: "string", description: "Value of field" },
              },
            },
            delivery_forename: {
              type: "object",
              properties: {
                value: { type: "string", description: "Value of field" },
              },
            },
            delivery_surname: {
              type: "object",
              properties: {
                value: { type: "string", description: "Value of field" },
              },
            },
            delivery_company: {
              type: "object",
              properties: {
                value: { type: "string", description: "Value of field" },
              },
            },
            delivery_street: {
              type: "object",
              properties: {
                value: { type: "string", description: "Value of field" },
              },
            },
            delivery_postcode: {
              type: "object",
              properties: {
                value: { type: "string", description: "Value of field" },
              },
            },
            delivery_place: {
              type: "object",
              properties: {
                value: { type: "string", description: "Value of field" },
              },
            },
            delivery_country: {
              type: "object",
              properties: {
                value: { type: "string", description: "Value of field" },
              },
            },
            phone: {
              type: "object",
              properties: {
                value: { type: "string", description: "Value of field" },
              },
            },
            email: {
              type: "object",
              properties: {
                value: { type: "string", description: "Value of field" },
              },
            },
            date_of_birth: {
              type: "object",
              properties: {
                value: { type: "string", description: "Value of field" },
              },
            },
            terms: {
              type: "string",
              description:
                "The terms must be accepted if this field is defined in the request",
            },
            privacy_policy: {
              type: "string",
              description:
                "The privacy policy must be accepted if this field is defined in the request",
            },
            custom_field_1: {
              type: "object",
              properties: {
                name: {
                  type: "array",
                  description: "Name of field",
                  items: { type: "string" },
                },
                value: { type: "string", description: "Value of field" },
              },
            },
            custom_field_2: {
              type: "object",
              properties: {
                name: {
                  type: "array",
                  description: "Name of field",
                  items: { type: "string" },
                },
                value: { type: "string", description: "Value of field" },
              },
            },
            custom_field_3: {
              type: "object",
              properties: {
                name: {
                  type: "array",
                  description: "Name of field",
                  items: { type: "string" },
                },
                value: { type: "string", description: "Value of field" },
              },
            },
            custom_field_4: {
              type: "object",
              properties: {
                name: {
                  type: "array",
                  description: "Name of field",
                  items: { type: "string" },
                },
                value: { type: "string", description: "Value of field" },
              },
            },
            custom_field_5: {
              type: "object",
              properties: {
                name: {
                  type: "array",
                  description: "Name of field",
                  items: { type: "string" },
                },
                value: { type: "string", description: "Value of field" },
              },
            },
          },
          type: "object",
        },
      },
      customAmount: {
        type: "boolean",
        description: "Only for type donation.",
        default: false,
      },
      goalAmount: {
        type: "integer",
        description: "Goal amount in cents. Only for type donation.",
        format: "int32",
        minimum: -2147483648,
        maximum: 2147483647,
      },
      subscription: {
        type: "boolean",
        description:
          "Defines whether the payment should be handled as subscription. Only for type shop.",
        default: false,
      },
      preAuthorization: {
        type: "boolean",
        description:
          "Whether charge payment manually at a later date (type authorization). Only for type shop.",
        default: false,
      },
      reservation: {
        type: "boolean",
        description:
          "Whether charge payment manually at a later date (type reservation). Only for type shop.",
        default: false,
      },
      subscriptionInterval: {
        type: "string",
        description:
          "The payment interval as string. (see PHP documentation of date interval for format, for type donation only the following intervals are permitted P7D, P1M, P3M, P1Y)",
      },
      subscriptionPeriod: {
        type: "string",
        description:
          "The subscription's period as string. Only for type shop. (see PHP documentation of date interval for format)",
      },
      subscriptionCancellationInterval: {
        type: "string",
        description:
          "The interval of cancellation as string. Only for type shop. (see PHP documentation of date interval for format)",
      },
    },
    $schema: "https://json-schema.org/draft/2020-12/schema#",
  },
  metadata: {
    allOf: [
      {
        type: "object",
        properties: {
          type: {
            type: "string",
            default: "shop",
            $schema: "https://json-schema.org/draft/2020-12/schema#",
            description: "The type of your page (shop / donation)",
          },
          instance: {
            type: "string",
            $schema: "https://json-schema.org/draft/2020-12/schema#",
            description: "Your Payrexx instance name",
          },
        },
        required: ["instance"],
      },
    ],
  },
  response: {
    "200": {
      type: "object",
      properties: {
        status: { type: "string", examples: ["success"] },
        data: {
          type: "array",
          items: {
            type: "object",
            properties: {
              id: { type: "integer", default: 0, examples: [122] },
              uuid: { type: "string", examples: ["99c54c5a"] },
              type: { type: "string", examples: ["shop"] },
              donatedAmount: { type: "integer", default: 0, examples: [0] },
              donationGoalAmount: {},
              donationPercentage: {},
              link: { type: "string", examples: ["https://test.com"] },
              name: { type: "string", examples: [""] },
              title: { type: "string", examples: ["Test"] },
              description: { type: "string", examples: ["Test"] },
              buttonText: { type: "string", examples: [""] },
              fields: {
                type: "object",
                properties: {
                  email: {
                    type: "object",
                    properties: {
                      active: {
                        type: "boolean",
                        default: true,
                        examples: [true],
                      },
                      mandatory: {
                        type: "boolean",
                        default: true,
                        examples: [false],
                      },
                    },
                  },
                  company: {
                    type: "object",
                    properties: {
                      active: {
                        type: "boolean",
                        default: true,
                        examples: [true],
                      },
                      mandatory: {
                        type: "boolean",
                        default: true,
                        examples: [false],
                      },
                    },
                  },
                  title: {
                    type: "object",
                    properties: {
                      active: {
                        type: "boolean",
                        default: true,
                        examples: [true],
                      },
                      mandatory: {
                        type: "boolean",
                        default: true,
                        examples: [false],
                      },
                    },
                  },
                  forename: {
                    type: "object",
                    properties: {
                      active: {
                        type: "boolean",
                        default: true,
                        examples: [true],
                      },
                      mandatory: {
                        type: "boolean",
                        default: true,
                        examples: [false],
                      },
                    },
                  },
                  surname: {
                    type: "object",
                    properties: {
                      active: {
                        type: "boolean",
                        default: true,
                        examples: [true],
                      },
                      mandatory: {
                        type: "boolean",
                        default: true,
                        examples: [false],
                      },
                    },
                  },
                  street: {
                    type: "object",
                    properties: {
                      active: {
                        type: "boolean",
                        default: true,
                        examples: [true],
                      },
                      mandatory: {
                        type: "boolean",
                        default: true,
                        examples: [false],
                      },
                    },
                  },
                  postcode: {
                    type: "object",
                    properties: {
                      active: {
                        type: "boolean",
                        default: true,
                        examples: [true],
                      },
                      mandatory: {
                        type: "boolean",
                        default: true,
                        examples: [false],
                      },
                    },
                  },
                  place: {
                    type: "object",
                    properties: {
                      active: {
                        type: "boolean",
                        default: true,
                        examples: [true],
                      },
                      mandatory: {
                        type: "boolean",
                        default: true,
                        examples: [false],
                      },
                    },
                  },
                  country: {
                    type: "object",
                    properties: {
                      active: {
                        type: "boolean",
                        default: true,
                        examples: [true],
                      },
                      mandatory: {
                        type: "boolean",
                        default: true,
                        examples: [false],
                      },
                    },
                  },
                  phone: {
                    type: "object",
                    properties: {
                      active: {
                        type: "boolean",
                        default: true,
                        examples: [true],
                      },
                      mandatory: {
                        type: "boolean",
                        default: true,
                        examples: [false],
                      },
                    },
                  },
                  confirm_email: {
                    type: "object",
                    properties: {
                      active: {
                        type: "boolean",
                        default: true,
                        examples: [true],
                      },
                      mandatory: {
                        type: "boolean",
                        default: true,
                        examples: [false],
                      },
                    },
                  },
                  date_of_birth: {
                    type: "object",
                    properties: {
                      active: {
                        type: "boolean",
                        default: true,
                        examples: [true],
                      },
                      mandatory: {
                        type: "boolean",
                        default: true,
                        examples: [false],
                      },
                    },
                  },
                },
              },
              psp: {
                type: "array",
                items: { type: "integer", default: 0, examples: [44] },
              },
              pm: { type: "array", items: {} },
              subscriptionInterval: { type: "string", examples: ["P10D"] },
              subscriptionPeriod: { type: "string", examples: ["P10D"] },
              subscriptionPeriodMinAmount: {
                type: "integer",
                default: 0,
                examples: [0],
              },
              subscriptionCancellationInterval: {
                type: "string",
                examples: ["P70D"],
              },
              createdAt: {
                type: "integer",
                default: 0,
                examples: [1518566400],
              },
              requestId: { type: "integer", default: 0, examples: [1395] },
            },
          },
        },
      },
      $schema: "https://json-schema.org/draft/2020-12/schema#",
    },
    "404": {
      type: "object",
      properties: {
        status: { type: "string", examples: ["error"] },
        message: {
          type: "string",
          examples: ["An error occurred: No Page found with id 145"],
        },
      },
      $schema: "https://json-schema.org/draft/2020-12/schema#",
    },
  },
} as const;
const CreateAPaylink = {
  body: {
    type: "object",
    required: [
      "title",
      "description",
      "referenceId",
      "purpose",
      "amount",
      "currency",
    ],
    properties: {
      title: {
        type: "string",
        description:
          "This is the page title which will be shown on the payment page.",
      },
      description: {
        type: "string",
        description:
          "This is a description which will be shown on the payment page.",
      },
      referenceId: {
        type: "string",
        description: "An internal reference id used by your system.",
      },
      purpose: { type: "string", description: "The purpose of the payment." },
      amount: {
        type: "integer",
        description: "The amount of the payment in cents.",
        format: "int32",
        minimum: -2147483648,
        maximum: 2147483647,
      },
      vatRate: {
        type: "number",
        description: "VAT rate percentage",
        default: null,
        format: "float",
        minimum: -3.402823669209385e38,
        maximum: 3.402823669209385e38,
      },
      currency: { type: "string", description: "The currency of the payment." },
      psp: {
        type: "array",
        description:
          "The psp which should be used for the payment. (Can be an array of integers.)",
        items: {
          type: "integer",
          format: "int32",
          minimum: -2147483648,
          maximum: 2147483647,
        },
      },
      pm: {
        type: "array",
        description: "List of payment mean names to display",
        items: { type: "string" },
      },
      sku: { type: "string", description: "Product stock keeping unit" },
      preAuthorization: {
        type: "boolean",
        description:
          "Whether charge payment manually at a later date (type authorization).",
        default: false,
      },
      reservation: {
        type: "boolean",
        description:
          "Whether charge payment manually at a later date (type reservation).",
        default: false,
      },
      name: {
        type: "string",
        description:
          "This is an internal name of the payment page. This name will be displayed to the administrator only.",
      },
      fields: {
        type: "array",
        description:
          "The contact data fields which should be displayed. See fields for more",
        items: { type: "string" },
      },
      hideFields: {
        type: "boolean",
        description: "Hide the whole contact fields section on invoice page",
        default: false,
      },
      concardisOrderId: {
        type: "string",
        description:
          "Only available for Concardis PSP and if the custom ORDERID option is activated in PSP settings in Payrexx administration. This ORDERID will be transferred to the Payengine.",
      },
      buttonText: { type: "string", description: "Custom pay button text." },
      expirationDate: {
        type: "string",
        description: "Expiration date for link.",
        format: "date",
      },
      successRedirectUrl: {
        type: "string",
        description: "URL to redirect to after successful payment.",
      },
      failedRedirectUrl: {
        type: "string",
        description: "URL to redirect to after failed payment.",
      },
      subscriptionState: {
        type: "boolean",
        description:
          "Defines whether the payment should be handled as subscription.",
        default: false,
      },
      subscriptionInterval: { type: "string", description: "Payment interval" },
      subscriptionPeriod: {
        type: "string",
        description: "Duration of the subscription",
      },
      subscriptionCancellationInterval: {
        type: "string",
        description:
          "Defines the period, in which a subscription can be canceled.",
      },
      attachments: {
        type: "string",
        description: "Provide your customers file attachments.",
        format: "binary",
      },
    },
    $schema: "https://json-schema.org/draft/2020-12/schema#",
  },
  metadata: {
    allOf: [
      {
        type: "object",
        properties: {
          instance: {
            type: "string",
            $schema: "https://json-schema.org/draft/2020-12/schema#",
            description: "Your Payrexx instance name",
          },
        },
        required: ["instance"],
      },
    ],
  },
  response: {
    "200": {
      type: "object",
      properties: {
        status: { type: "string", examples: ["success"] },
        data: {
          type: "array",
          items: {
            type: "object",
            properties: {
              id: { type: "integer", default: 0, examples: [1] },
              hash: {
                type: "string",
                examples: ["382c85eab7a86278e3c3b06a23af2358"],
              },
              referenceId: {
                type: "string",
                examples: ["Order number of my online shop application"],
              },
              link: {
                type: "string",
                examples: [
                  "https://demo.payrexx.com/?payment=382c85eab7a86278e3c3b06a23af2358",
                ],
              },
              invoices: { type: "array", items: {} },
              preAuthorization: { type: "integer", default: 0, examples: [0] },
              reservation: { type: "integer", default: 0, examples: [0] },
              name: { type: "string", examples: ["Online-Shop payment #001"] },
              api: { type: "boolean", default: true, examples: [true] },
              fields: {
                type: "object",
                properties: {
                  title: {
                    type: "object",
                    properties: {
                      active: {
                        type: "boolean",
                        default: true,
                        examples: [true],
                      },
                      mandatory: {
                        type: "boolean",
                        default: true,
                        examples: [true],
                      },
                    },
                  },
                  forename: {
                    type: "object",
                    properties: {
                      active: {
                        type: "boolean",
                        default: true,
                        examples: [true],
                      },
                      mandatory: {
                        type: "boolean",
                        default: true,
                        examples: [true],
                      },
                    },
                  },
                  surname: {
                    type: "object",
                    properties: {
                      active: {
                        type: "boolean",
                        default: true,
                        examples: [true],
                      },
                      mandatory: {
                        type: "boolean",
                        default: true,
                        examples: [true],
                      },
                    },
                  },
                  company: {
                    type: "object",
                    properties: {
                      active: {
                        type: "boolean",
                        default: true,
                        examples: [true],
                      },
                      mandatory: {
                        type: "boolean",
                        default: true,
                        examples: [true],
                      },
                    },
                  },
                  street: {
                    type: "object",
                    properties: {
                      active: {
                        type: "boolean",
                        default: true,
                        examples: [false],
                      },
                      mandatory: {
                        type: "boolean",
                        default: true,
                        examples: [false],
                      },
                    },
                  },
                  postcode: {
                    type: "object",
                    properties: {
                      active: {
                        type: "boolean",
                        default: true,
                        examples: [false],
                      },
                      mandatory: {
                        type: "boolean",
                        default: true,
                        examples: [false],
                      },
                    },
                  },
                  place: {
                    type: "object",
                    properties: {
                      active: {
                        type: "boolean",
                        default: true,
                        examples: [false],
                      },
                      mandatory: {
                        type: "boolean",
                        default: true,
                        examples: [false],
                      },
                    },
                  },
                  country: {
                    type: "object",
                    properties: {
                      active: {
                        type: "boolean",
                        default: true,
                        examples: [true],
                      },
                      mandatory: {
                        type: "boolean",
                        default: true,
                        examples: [true],
                      },
                    },
                  },
                  phone: {
                    type: "object",
                    properties: {
                      active: {
                        type: "boolean",
                        default: true,
                        examples: [false],
                      },
                      mandatory: {
                        type: "boolean",
                        default: true,
                        examples: [false],
                      },
                    },
                  },
                  email: {
                    type: "object",
                    properties: {
                      active: {
                        type: "boolean",
                        default: true,
                        examples: [true],
                      },
                      mandatory: {
                        type: "boolean",
                        default: true,
                        examples: [true],
                      },
                    },
                  },
                  date_of_birth: {
                    type: "object",
                    properties: {
                      active: {
                        type: "boolean",
                        default: true,
                        examples: [false],
                      },
                      mandatory: {
                        type: "boolean",
                        default: true,
                        examples: [false],
                      },
                    },
                  },
                  terms: {
                    type: "object",
                    properties: {
                      active: {
                        type: "boolean",
                        default: true,
                        examples: [true],
                      },
                      mandatory: {
                        type: "boolean",
                        default: true,
                        examples: [true],
                      },
                    },
                  },
                  privacy_policy: {
                    type: "object",
                    properties: {
                      active: {
                        type: "boolean",
                        default: true,
                        examples: [true],
                      },
                      mandatory: {
                        type: "boolean",
                        default: true,
                        examples: [true],
                      },
                    },
                  },
                  custom_field_1: {
                    type: "object",
                    properties: {
                      active: {
                        type: "boolean",
                        default: true,
                        examples: [true],
                      },
                      mandatory: {
                        type: "boolean",
                        default: true,
                        examples: [true],
                      },
                      names: {
                        type: "object",
                        properties: {
                          de: { type: "string", examples: ["This is a field"] },
                          en: { type: "string", examples: ["This is a field"] },
                          fr: { type: "string", examples: ["This is a field"] },
                          it: { type: "string", examples: ["This is a field"] },
                        },
                      },
                    },
                  },
                  custom_field_2: {
                    type: "object",
                    properties: {
                      active: {
                        type: "boolean",
                        default: true,
                        examples: [false],
                      },
                      mandatory: {
                        type: "boolean",
                        default: true,
                        examples: [false],
                      },
                      names: {
                        type: "object",
                        properties: {
                          de: { type: "string", examples: [""] },
                          en: { type: "string", examples: [""] },
                          fr: { type: "string", examples: [""] },
                          it: { type: "string", examples: [""] },
                        },
                      },
                    },
                  },
                  custom_field_3: {
                    type: "object",
                    properties: {
                      active: {
                        type: "boolean",
                        default: true,
                        examples: [false],
                      },
                      mandatory: {
                        type: "boolean",
                        default: true,
                        examples: [false],
                      },
                      names: {
                        type: "object",
                        properties: {
                          de: { type: "string", examples: [""] },
                          en: { type: "string", examples: [""] },
                          fr: { type: "string", examples: [""] },
                          it: { type: "string", examples: [""] },
                        },
                      },
                    },
                  },
                },
              },
              psp: { type: "integer", default: 0, examples: [1] },
              pm: { type: "array", items: {} },
              purpose: { type: "string", examples: ["Shop Order #001"] },
              amount: { type: "integer", default: 0, examples: [590] },
              vatRate: { type: "number", default: 0, examples: [7.7] },
              currency: { type: "string", examples: ["CHF"] },
              sku: { type: "string", examples: ["P01122000"] },
              subscriptionState: {
                type: "boolean",
                default: true,
                examples: [false],
              },
              subscriptionInterval: { type: "string", examples: [""] },
              subscriptionPeriod: { type: "string", examples: [""] },
              subscriptionPeriodMinAmount: { type: "string", examples: [""] },
              subscriptionCancellationInterval: {
                type: "string",
                examples: [""],
              },
              createdAt: {
                type: "integer",
                default: 0,
                examples: [1418392958],
              },
            },
          },
        },
      },
      $schema: "https://json-schema.org/draft/2020-12/schema#",
    },
  },
} as const;
const CreateAQrCode = {
  body: {
    type: "object",
    required: ["webshopUrl"],
    properties: {
      webshopUrl: {
        type: "string",
        description:
          "An URL where the your customer has to be redirected when they scanned your QR Code.",
      },
    },
    $schema: "https://json-schema.org/draft/2020-12/schema#",
  },
  metadata: {
    allOf: [
      {
        type: "object",
        properties: {
          instance: {
            type: "string",
            $schema: "https://json-schema.org/draft/2020-12/schema#",
            description: "Your Payrexx instance name",
          },
        },
        required: ["instance"],
      },
    ],
  },
  response: {
    "200": {
      type: "object",
      properties: {
        status: { type: "string", examples: ["success"] },
        data: {
          type: "array",
          items: {
            type: "object",
            properties: {
              uuid: {
                type: "string",
                examples: ["08cc4152-993a-434b-937d-933359148ee8"],
              },
              webshopUrl: {
                type: "string",
                examples: ["https://demo.payrexx.com/demo-shop"],
              },
              png: {
                type: "string",
                examples: [
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUAAAAFACAIAAABC8jL9AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAP/ElEQVR4nO3d3XLjOg6F0WRq3v+Vey66KuNK+4cgNghs6VuXPrKkyEIfUCCh7z9//nwB8PSf7hMAsI8ABowRwIAxAhgwRgADxghgwBgBDBgjgAFjBDBgjAAGjBHAgDECGDBGAAPGCGDAGAEMGCOAAWMEMGCMAAaMEcCAMQIYMEYAA8YIYMAYAQwYI4ABYwQwYIwABowRwIAxAhgwRgADxghgwBgBDBgjgAFjBDBgjAAGjBHAgDECGDBGAAPG/nv+kN/f3xW7/fPnz8f9v9om+nnofB692v+Klb8rs/2b725ft8Xz+Xiewt8r85t+FPpBJfg/MGCMAAaMEcCAsYYxMH48DsMkY7PF7z497sZuo59HVe//AvoDeHvcv/grPt1/9KCZu/zVfoQPdeQ2zjN6btEHadWq78MipNCAMQIYMNafQv9QpV5vdhutT5Z+dwjVOHzCuFRyDkX3YZFBAXw3r+6AIXeGyvY/Cq+ug3CyzQWQQgPGCGDAGCl0m4FjrYosdKWWe/M0OOOCAZy840M3U7KuK/fmfI4tMHizf1WgrvzEN/lHgRQaMEYAA8YumEI/yqy/Xdxn9XdXvqLaJmOl7n1ybvO1M+cfFw/gwzL/QKjGqJLjrpxD0bzuiod2FyutPyKFBowRwICxC6bQi/OTj9lYo9vuwMmEDnEgzTY1KICLfpVQo7OV82ms/Uoa5aka9IU2KP26dp9e/zqQQgPGCGDAWH8KPWHstzIvdyUVr14DHNq/MLVWXZ/M/j9uv7Lxm+0n3Icb+gO4i3xebrJ3VEVgZFRfH9V1uzlSaMAYAQwYu34KfXIO8ITjqvbT1fNZ5SaZdkMAN9bZQofeOM9jL86KrlVWHbpoQsV2Hf7V5yvn6VXvfYUUGjBGAAPGBo2BVWWYM6ex/d3tseXAOdWZNcDRbSQyfcgOD1sWDQrgIqF5vMIfONMjqqvn08d9CueBV9d1rzHE/YgUGjBGAAPG/FJo1Riy+j1AmXnRo8aNi6LnM7kO7PJeq69RAbxSxzs8Tzj6MCM0hhxiu0Za1INa8pByQh3+DFJowBgBDBgblEK/kZmXq/puJvu1GFNtDE8q2vcc2JXpCTzlEcCPMu/mie6zyx3W0Hb9Qyb5h2lxmwNIoQFjBDBgbFAKPTDNi5pc26xw+DVREpl+1AMNCuBfJDVVl7XHKzvJjNkyNczMKoWi9ye9OsRH8wMyihQaMEYAA8bmptAfZeqWB96187H2WzHhWZVqbuz/1Waq+nlmm+rft/RA7w0K4GgPpIFO1l3l7/6pvs4bc92j22yfUvQ5y5yxNCk0YIwABow1pNDJNKl6TFXx3VIHemVVzwOf1rvbYu76X4PGwFHJ9/e29DSuONZJB9bEdo1LQ2PsOWuDSaEBYwQwYGxWCn2y7ifPfA6k611jswnj/+ouRdXvgioy6N1Ih2uAmWPJ5zmvbJO5gw8syt8eQ6os3lddNecipNCAMQIYMNY8Bi5KUeZnPl/p+dgfM+rkPOqx88PxaNZDrOhNkxmrVPdwlgfAgbW10eN+rIGrarOPVOuZNzZrr8P/ixQaMEYAA8ZmpdA/FsdjFUMmeYYmfEVIRX1bcg2T57ny+0o6+yT/2IFzpJsDWHgVjtVvW3Z+DZL3D1ePsYuOVYQUGjBGAAPGPOrAqjnSFWOYp/t8czIua5Iz1yqz/rbifEI7/2X4yGjoQ6xFkvckzR/nfBS6DpknYRt3s+o9T5LzyUTjzEgmhQaMEcCAsVk9sVS7GlivKyW5Dovj9ur1t6rvqlL30Hneui/0ou0f5mTNObo29eOB3ny3YmwZdXLe+JA14UOQQgPGCGDAmF8KLenxW7QWd3vjjTqkqtaa+dvlafyE4cD5w2U098RSNXlX/fAbNeFjpcjMuXn1Ot5W0aN7ZU5B44NSUmjAGAEMGPMbAz9SZXon68Yn1+tWZ8LVvZRV16p6LP2z29vVgTONiKr7D0d7QW3s5+lmqrG3ao5xsv5cPS+9tC/axy/uHVeIFBowRgADxmatB26Zv7qxE9Mqy1Oq9cyZ+dhdc9e31yHPuQG8H2Jl+gaf7EG9dyDhflS9o1R/e7T3VXSfmeN6IYUGjBHAgLHrrAd2X/dbOsd44xza958sI1Vcq4FZ99AxcEXvokyt79XnB2qV1eT9tF4xahwXmv9MHRjAJgIYMDYrhZbU3DZqxdXjqJPzn1U+Pl8QTgsdO997wg/xXn8Ay+cAH7Z9c78SHYsKA+mk7XdZRbePXquo3huSFBowRgADxvpT6G1D6nuSWnTjvOvt+cCHj5vZZ/RtMttvn7nFeuCV+urK59HDZdavJufQts+7VtXGo4fYOO72M5HM+vBo5M95pkAKDRgjgAFjs9YDv1IxtKjonzwns/qrZa744Zp5xYFUKxwPMH6IlRnPVIz9Ku68zDuWVD3DiiJquw68snF1f6w564pJoQFjBDBgzCOFDs1bPnAO02TW2UbT7+pe0KU7T9bbB94DswI40+Mqf6ADx30l0/+p8a7q6gVd7dh9mEcKDRgjgAFjs3piRXsIL+724wbuvabGnoPpwNKo19qsMfBTmff0FJ3GNCcbu8l7ZW0f9CvX5yx6rWbeAKTQgDECGDD2fT4xGDjmuTPV8r3q5wgTSjsD0+zm9cBdP8Cjoodbqht6Ql8reZtu1TXPjGmvgRQaMEYAA8YMykgVDvQrVpnWE2t7m+Q1l/QMv565Abxd421cvxrazyuN+z/5oCi0Hri6jv1ItY76DFJowBgBDBibNRc6tNnG9MmTQ6aK88+cQFfWp+q5Hd1n9f3zNL2/RR34lwkF+lfkvY4z59BV54yefGZ+8pv9SNYeXw8pNGCMAAaM9afQFpLjycww6WQPqtAUX+E1Ue1nTnXnmEHvRjqwH3kv4pUvRu9U1fzerrtZNde9a41x9Cu8HxjAJgIYMMZ64N+qyxJdU0FxwB3rwNUk494Ja5hPLpR/lJyr3FWnvdJ67DdIoQFjBDBg7PoptGq9q2p4M61uWX0+MzPPdcPPvz+At5uqvdLYwP3psR5d4LjyMv7G3ObQd1fq6q8MWRDyBik0YIwABoz1p9DR7K5ifWnpdw+/H2jaGLuCqv9W9Lsfd0sdWKOrBnjy9zvWszr5R1U3Q8+8Wjm0/cynWaTQgDECGDB2zRT6Dqp7TanWAJ/sa11xPjMz5x+zArh0ve7iseS1xIr1scLrIxnjqd7fGz3c4f1v9yqvQwoNGCOAAWOzUuiT85blfYM30rnQV7oGbxs/SvXY+GSfsBU/x71jHfhu/X7bX5BdVI8N7VNYu25Zk9y4PvwXUmjAGAEMGOtPoSvGM46Ztuo6jJpbPuSHkJ/GkL/ra0IAR2XGM9u138znK2POovcARWvaof0ka6HbY1fV9V88h+FIoQFjBDBgzC+FHjUHePhA/enflaxXr2Sq8jpw0bWKPncYmGn3B7BqgsT2/NUhv0rXe3dKr4NqvC08jR/J+2TI/UMKDRgjgAFj/Sn0tB5O7fNpf6noR73yeXQ/KhX3Q3QMv/L5EP0B/FFmLe5hE8ZFofrqkPFeaJ72gUUmJ3uGJZFCA8YIYMCYQQr9xrQybEUL6Ggtd9SY7eTJCI+1/TvecT1whcx1DH03uS5UNeaU9xJbmW9cMbZcOcmNH7e6j1ojUmjAGAEMGDNIoYvm7qoOl0nPVDXY6Jit+rWaqjnGqhLRtLkGQv0BLH+3TfRuODCekax9ra5nJlnXlrd33o4UGjBGAAPG+lNo1fgnlNXMKQP8q3G6qGqMnTmWZOcrX0neA09TdOrAT5iuiZWftuOc8FcfCs9fXgP3QgoNGCOAAWNzU2jV0GLC+t6T7woaON3vr43525N7aw25vA0BrHqvzMmx8aONNauhbaIndnLcLhxnbq+5rTiHqDnPIEihAWMEMGCsIYWetoj3zW5V4yt5qTC5Hri6Rqraj+o5gqqX9cfj3r0OfKV63fZc3Ip1xcn9q4R6XwvXQl8YKTRgjAAGjM1KoR1l1r5WDxlapulGnwVsrOldPNz2NqEhSS/jOvBXQd2yYoL7NMK7sOuGlvS+flR9H9YhhQaMEcCAsaFj4MWxx8neVxUyfaoW/9P2Pqv3Uz0dYOB0gwrNAVw9eCjqgyV5l0+yV1N1r6nMfqLjTMmxMnOki+aWH0AKDRgjgAFj372lrSFL4SazKE01qngNTfS7jUE09CHWV/3Fcpk/nCEfDz9Kjr3l179ifkFFT2ktUmjAGAEMGJu7Hjgz93VOhnMN0+ZUb2wW2n57vfQd1wNn5rVqT2BjG+H4ufRVPZm6dPSgRY2pqmvFpkihAWMEMGCsP4VuV1E/PDw3+ORxP46HF1N01Xrg6u8O17weWLWrxidbmSH0j8N3mMuYUDLPec6kiwqk0IAxAhgw1jwX+tGBdK46daxe4od/yadwZn67O9aBJ5AH2MYPeXJSfmafFXX79rkAG4acDyk0YIwABow1jIGHpECPTi67UxmSwt3W0+vPGPj/JOuBqxsGnHzwltl+yAPC0MSPN9tk9h/az8q59T4GJoUGjBHAgLG5KfT2mswiK0Od3uHQv+fgeFzVnOfM9d9ei84Y+Dl5H6zoBhv9n6P7nPZQ6tja5mQvq67JOUOQQgPGCGDAmEcKXapouVkyo97YoIhwjfHJdHRmxitnvB4406fqwjJrj7fXNh+Yj616v9H29Sl6z1YSKTRgjAAGjM3tCx2VqQCFvhjdJmn7EEVTUDO11uq+Vpm/cVrbo0UXfIgVrStG+xIX6ao3hsa9mYbmRWNa+Xe9kEIDxghgwNgFU+hFXa+3ybzzaZqn4+GNPs/yay68mMN/l/4A3v7xqt8ZGy2KbsxtHttgbeW9R0Pu7O0/M9O3bA5SaMAYAQwY60+hf6iWqiVTu+i7f1TH6tpnaCy6WB+WKHpnUmktmvXA5xzrHVUxDh8yFpX0LUse6+ZIoQFjBDBg7L4pdCgTS66JzcwZPpmmfjyZja90tbm9iesHcPQG2u7DPKSf07E52wdI+jAffnfUYaTQgDECGDB2/RT6ZJ0wqqImKalUCdcDV68BfqUi1Z+TOf+4fgCrbL/z9tWHRmtct9cDJ9+TJLEyX/2VjXnsh5FCA8YIYMAYKXTWylg0k25Vv29Jsv+NGvWx90gVPQQZMh4eFMAV/aKT62yj49gJNeHMOmS5ov5kGRV1/sZ1wqTQgDECGDDWn0JPqLtG30tU8ZYN1XXItLOu/nz7xL5EZbzFY0X97Ir1wGJF49Vq8vcYfyUCoGKcf9I1el+9QgoNGCOAAWPfRtkCgF/4PzBgjAAGjBHAgDECGDBGAAPGCGDAGAEMGCOAAWMEMGCMAAaMEcCAMQIYMEYAA8YIYMAYAQwYI4ABYwQwYIwABowRwIAxAhgwRgADxghgwBgBDBgjgAFjBDBgjAAGjBHAgDECGDBGAAPGCGDAGAEMGCOAAWMEMGCMAAaMEcCAMQIYMEYAA8b+BxmKS9VLlC0xAAAAAElFTkSuQmCC",
                ],
              },
              svg: {
                type: "string",
                examples: [
                  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHdpZHRoPSIzMjBweCIgaGVpZ2h0PSIzMjBweCIgdmlld0JveD0iMCAwIDMyMCAzMjAiPjxkZWZzPjxyZWN0IGlkPSJibG9jayIgd2lkdGg9IjQiIGhlaWdodD0iNCIgZmlsbD0iIzAwMDAwMCIgZmlsbC1vcGFjaXR5PSIxIi8+PC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIzMjAiIGhlaWdodD0iMzIwIiBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9IjEiLz48dXNlIHg9IjM4IiB5PSIzOCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI0MiIgeT0iMzgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNDYiIHk9IjM4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjUwIiB5PSIzOCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI1NCIgeT0iMzgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNTgiIHk9IjM4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjYyIiB5PSIzOCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI3MCIgeT0iMzgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNzQiIHk9IjM4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjgyIiB5PSIzOCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI5MCIgeT0iMzgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iOTgiIHk9IjM4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEwMiIgeT0iMzgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTA2IiB5PSIzOCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMTAiIHk9IjM4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEyMiIgeT0iMzgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTQyIiB5PSIzOCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNDYiIHk9IjM4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE1OCIgeT0iMzgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTYyIiB5PSIzOCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNzgiIHk9IjM4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE4NiIgeT0iMzgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTk0IiB5PSIzOCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMDYiIHk9IjM4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIxMCIgeT0iMzgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjE0IiB5PSIzOCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMTgiIHk9IjM4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIyNiIgeT0iMzgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjM0IiB5PSIzOCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNDIiIHk9IjM4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI0NiIgeT0iMzgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjU0IiB5PSIzOCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNTgiIHk9IjM4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI2MiIgeT0iMzgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjY2IiB5PSIzOCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNzAiIHk9IjM4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI3NCIgeT0iMzgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjc4IiB5PSIzOCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIzOCIgeT0iNDIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNjIiIHk9IjQyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjcwIiB5PSI0MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI5MCIgeT0iNDIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTEwIiB5PSI0MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMjYiIHk9IjQyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEzNCIgeT0iNDIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTM4IiB5PSI0MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNDYiIHk9IjQyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE1NCIgeT0iNDIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTU4IiB5PSI0MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNjIiIHk9IjQyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE2NiIgeT0iNDIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTgyIiB5PSI0MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxODYiIHk9IjQyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE5MCIgeT0iNDIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTk4IiB5PSI0MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMDIiIHk9IjQyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIwNiIgeT0iNDIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjIyIiB5PSI0MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMjYiIHk9IjQyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIzMCIgeT0iNDIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjM0IiB5PSI0MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNDIiIHk9IjQyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI0NiIgeT0iNDIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjU0IiB5PSI0MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNzgiIHk9IjQyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjM4IiB5PSI0NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI0NiIgeT0iNDYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNTAiIHk9IjQ2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjU0IiB5PSI0NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI2MiIgeT0iNDYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNzAiIHk9IjQ2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9Ijc0IiB5PSI0NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI4NiIgeT0iNDYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iOTAiIHk9IjQ2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9Ijk0IiB5PSI0NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMDYiIHk9IjQ2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjExMCIgeT0iNDYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTE0IiB5PSI0NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNDYiIHk9IjQ2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE1NCIgeT0iNDYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTU4IiB5PSI0NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNjIiIHk9IjQ2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE2NiIgeT0iNDYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTcwIiB5PSI0NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNzgiIHk9IjQ2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE4MiIgeT0iNDYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTg2IiB5PSI0NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxOTAiIHk9IjQ2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE5NCIgeT0iNDYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTk4IiB5PSI0NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMDYiIHk9IjQ2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIzMCIgeT0iNDYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjM4IiB5PSI0NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNDIiIHk9IjQ2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI0NiIgeT0iNDYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjU0IiB5PSI0NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNjIiIHk9IjQ2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI2NiIgeT0iNDYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjcwIiB5PSI0NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNzgiIHk9IjQ2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjM4IiB5PSI1MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI0NiIgeT0iNTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNTAiIHk9IjUwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjU0IiB5PSI1MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI2MiIgeT0iNTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iODYiIHk9IjUwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9Ijk0IiB5PSI1MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMTAiIHk9IjUwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjExNCIgeT0iNTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTI2IiB5PSI1MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMzAiIHk9IjUwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEzNCIgeT0iNTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTQ2IiB5PSI1MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNTgiIHk9IjUwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE3MCIgeT0iNTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTc0IiB5PSI1MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNzgiIHk9IjUwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE4MiIgeT0iNTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTkwIiB5PSI1MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMDIiIHk9IjUwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIxMCIgeT0iNTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjE4IiB5PSI1MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMjIiIHk9IjUwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIyNiIgeT0iNTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjM4IiB5PSI1MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNDYiIHk9IjUwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI1NCIgeT0iNTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjYyIiB5PSI1MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNjYiIHk9IjUwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI3MCIgeT0iNTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjc4IiB5PSI1MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIzOCIgeT0iNTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNDYiIHk9IjU0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjUwIiB5PSI1NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI1NCIgeT0iNTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNjIiIHk9IjU0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9Ijc0IiB5PSI1NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI4NiIgeT0iNTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iOTQiIHk9IjU0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEwMiIgeT0iNTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTA2IiB5PSI1NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMjIiIHk9IjU0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEyNiIgeT0iNTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTM4IiB5PSI1NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNDIiIHk9IjU0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE0NiIgeT0iNTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTUwIiB5PSI1NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNTQiIHk9IjU0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE1OCIgeT0iNTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTYyIiB5PSI1NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNjYiIHk9IjU0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE4MiIgeT0iNTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTk0IiB5PSI1NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMDIiIHk9IjU0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIwNiIgeT0iNTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjE0IiB5PSI1NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMzgiIHk9IjU0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI0MiIgeT0iNTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjU0IiB5PSI1NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNjIiIHk9IjU0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI2NiIgeT0iNTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjcwIiB5PSI1NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNzgiIHk9IjU0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjM4IiB5PSI1OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI2MiIgeT0iNTgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNzAiIHk9IjU4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9Ijc4IiB5PSI1OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI4MiIgeT0iNTgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTA2IiB5PSI1OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMTgiIHk9IjU4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEyMiIgeT0iNTgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTI2IiB5PSI1OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMzAiIHk9IjU4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEzNCIgeT0iNTgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTM4IiB5PSI1OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNTAiIHk9IjU4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE2NiIgeT0iNTgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTc4IiB5PSI1OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMDIiIHk9IjU4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIwNiIgeT0iNTgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjEwIiB5PSI1OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMjYiIHk9IjU4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIzOCIgeT0iNTgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjU0IiB5PSI1OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNzgiIHk9IjU4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjM4IiB5PSI2MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI0MiIgeT0iNjIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNDYiIHk9IjYyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjUwIiB5PSI2MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI1NCIgeT0iNjIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNTgiIHk9IjYyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjYyIiB5PSI2MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI3MCIgeT0iNjIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNzgiIHk9IjYyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9Ijg2IiB5PSI2MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI5NCIgeT0iNjIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTAyIiB5PSI2MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMTAiIHk9IjYyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjExOCIgeT0iNjIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTI2IiB5PSI2MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMzQiIHk9IjYyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE0MiIgeT0iNjIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTUwIiB5PSI2MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNTgiIHk9IjYyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE2NiIgeT0iNjIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTc0IiB5PSI2MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxODIiIHk9IjYyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE5MCIgeT0iNjIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTk4IiB5PSI2MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMDYiIHk9IjYyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIxNCIgeT0iNjIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjIyIiB5PSI2MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMzAiIHk9IjYyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIzOCIgeT0iNjIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjQ2IiB5PSI2MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNTQiIHk9IjYyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI1OCIgeT0iNjIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjYyIiB5PSI2MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNjYiIHk9IjYyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI3MCIgeT0iNjIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjc0IiB5PSI2MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNzgiIHk9IjYyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjcwIiB5PSI2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI3NCIgeT0iNjYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iODYiIHk9IjY2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEwMiIgeT0iNjYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTA2IiB5PSI2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMTQiIHk9IjY2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjExOCIgeT0iNjYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTI2IiB5PSI2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMzQiIHk9IjY2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE0NiIgeT0iNjYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTUwIiB5PSI2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNjYiIHk9IjY2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE3MCIgeT0iNjYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTc0IiB5PSI2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNzgiIHk9IjY2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE4NiIgeT0iNjYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTk4IiB5PSI2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMDYiIHk9IjY2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIxMCIgeT0iNjYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjQyIiB5PSI2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI0NiIgeT0iNzAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNTAiIHk9IjcwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjU0IiB5PSI3MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI2MiIgeT0iNzAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNzAiIHk9IjcwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjkwIiB5PSI3MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI5NCIgeT0iNzAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iOTgiIHk9IjcwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjExMCIgeT0iNzAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTIyIiB5PSI3MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMzAiIHk9IjcwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE0MiIgeT0iNzAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTUwIiB5PSI3MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNTQiIHk9IjcwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE1OCIgeT0iNzAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTYyIiB5PSI3MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNjYiIHk9IjcwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE3MCIgeT0iNzAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTc4IiB5PSI3MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxOTAiIHk9IjcwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE5OCIgeT0iNzAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjAyIiB5PSI3MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMDYiIHk9IjcwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIxNCIgeT0iNzAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjE4IiB5PSI3MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMjIiIHk9IjcwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIyNiIgeT0iNzAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjMwIiB5PSI3MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMzQiIHk9IjcwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIzOCIgeT0iNzAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjUwIiB5PSI3MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNTQiIHk9IjcwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI1OCIgeT0iNzAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjcwIiB5PSI3MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNzQiIHk9IjcwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI3OCIgeT0iNzAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNTAiIHk9Ijc0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjU4IiB5PSI3NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI2NiIgeT0iNzQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNzAiIHk9Ijc0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9Ijc4IiB5PSI3NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI4NiIgeT0iNzQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iOTAiIHk9Ijc0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEwMiIgeT0iNzQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTA2IiB5PSI3NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMTQiIHk9Ijc0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEzMCIgeT0iNzQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTM0IiB5PSI3NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMzgiIHk9Ijc0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE0MiIgeT0iNzQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTQ2IiB5PSI3NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNTAiIHk9Ijc0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE1NCIgeT0iNzQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTU4IiB5PSI3NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNjIiIHk9Ijc0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE2NiIgeT0iNzQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTk0IiB5PSI3NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMDYiIHk9Ijc0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIxMCIgeT0iNzQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjE0IiB5PSI3NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMjIiIHk9Ijc0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI0MiIgeT0iNzQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjQ2IiB5PSI3NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNTAiIHk9Ijc0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI1NCIgeT0iNzQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjU4IiB5PSI3NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNjIiIHk9Ijc0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI3NCIgeT0iNzQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjc4IiB5PSI3NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI1MCIgeT0iNzgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNTQiIHk9Ijc4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjYyIiB5PSI3OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI3NCIgeT0iNzgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNzgiIHk9Ijc4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjgyIiB5PSI3OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI5MCIgeT0iNzgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iOTQiIHk9Ijc4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEwMiIgeT0iNzgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTA2IiB5PSI3OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMTQiIHk9Ijc4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjExOCIgeT0iNzgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTMwIiB5PSI3OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMzgiIHk9Ijc4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE0NiIgeT0iNzgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTUwIiB5PSI3OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNTQiIHk9Ijc4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE2MiIgeT0iNzgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTY2IiB5PSI3OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNzQiIHk9Ijc4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE4MiIgeT0iNzgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTg2IiB5PSI3OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxOTQiIHk9Ijc4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIwMiIgeT0iNzgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjA2IiB5PSI3OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMjIiIHk9Ijc4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIyNiIgeT0iNzgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjMwIiB5PSI3OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMzQiIHk9Ijc4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIzOCIgeT0iNzgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjQyIiB5PSI3OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNDYiIHk9Ijc4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI1NCIgeT0iNzgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjU4IiB5PSI3OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNzAiIHk9Ijc4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjQ2IiB5PSI4MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI1NCIgeT0iODIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iOTAiIHk9IjgyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9Ijk0IiB5PSI4MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMDIiIHk9IjgyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEwNiIgeT0iODIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTEwIiB5PSI4MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMzAiIHk9IjgyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE0MiIgeT0iODIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTQ2IiB5PSI4MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNjYiIHk9IjgyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE3NCIgeT0iODIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTkwIiB5PSI4MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxOTQiIHk9IjgyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIwNiIgeT0iODIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjEwIiB5PSI4MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMTQiIHk9IjgyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIxOCIgeT0iODIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjI2IiB5PSI4MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMzAiIHk9IjgyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI1MCIgeT0iODIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjU0IiB5PSI4MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNTgiIHk9IjgyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI2NiIgeT0iODIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjcwIiB5PSI4MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI2MiIgeT0iODYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNzAiIHk9Ijg2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9Ijc0IiB5PSI4NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI4MiIgeT0iODYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iOTAiIHk9Ijg2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9Ijk0IiB5PSI4NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMDIiIHk9Ijg2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEwNiIgeT0iODYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTE0IiB5PSI4NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMjYiIHk9Ijg2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEzMCIgeT0iODYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTM4IiB5PSI4NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNDIiIHk9Ijg2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE1NCIgeT0iODYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTU4IiB5PSI4NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxODYiIHk9Ijg2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE5MCIgeT0iODYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTk0IiB5PSI4NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxOTgiIHk9Ijg2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIxMCIgeT0iODYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjE4IiB5PSI4NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMjIiIHk9Ijg2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIzMCIgeT0iODYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjM0IiB5PSI4NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMzgiIHk9Ijg2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI0MiIgeT0iODYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjUwIiB5PSI4NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNTgiIHk9Ijg2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI3NCIgeT0iODYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjc4IiB5PSI4NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIzOCIgeT0iOTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNDIiIHk9IjkwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjUwIiB5PSI5MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI1NCIgeT0iOTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNzQiIHk9IjkwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9Ijc4IiB5PSI5MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI5MCIgeT0iOTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iOTQiIHk9IjkwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9Ijk4IiB5PSI5MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMDIiIHk9IjkwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEyNiIgeT0iOTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTMwIiB5PSI5MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMzgiIHk9IjkwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE1MCIgeT0iOTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTU0IiB5PSI5MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNTgiIHk9IjkwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE2MiIgeT0iOTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTY2IiB5PSI5MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNzAiIHk9IjkwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE3NCIgeT0iOTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTc4IiB5PSI5MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxOTAiIHk9IjkwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE5NCIgeT0iOTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTk4IiB5PSI5MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMDIiIHk9IjkwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIxMCIgeT0iOTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjE0IiB5PSI5MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMjIiIHk9IjkwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIzOCIgeT0iOTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjQyIiB5PSI5MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNDYiIHk9IjkwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI1MCIgeT0iOTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjU0IiB5PSI5MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNjIiIHk9IjkwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI3OCIgeT0iOTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNDYiIHk9Ijk0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjUwIiB5PSI5NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI1OCIgeT0iOTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNjIiIHk9Ijk0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjY2IiB5PSI5NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI3NCIgeT0iOTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNzgiIHk9Ijk0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjgyIiB5PSI5NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI4NiIgeT0iOTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iOTQiIHk9Ijk0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9Ijk4IiB5PSI5NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMTAiIHk9Ijk0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjExNCIgeT0iOTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTQyIiB5PSI5NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNjIiIHk9Ijk0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE2NiIgeT0iOTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTgyIiB5PSI5NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxODYiIHk9Ijk0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE5MCIgeT0iOTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTk4IiB5PSI5NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMDIiIHk9Ijk0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIyMiIgeT0iOTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjI2IiB5PSI5NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMzAiIHk9Ijk0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI0NiIgeT0iOTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjU0IiB5PSI5NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNTgiIHk9Ijk0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI2NiIgeT0iOTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjcwIiB5PSI5NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNzQiIHk9Ijk0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI3OCIgeT0iOTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNDIiIHk9Ijk4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjU4IiB5PSI5OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI2NiIgeT0iOTgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNzAiIHk9Ijk4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9Ijc0IiB5PSI5OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI3OCIgeT0iOTgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iODYiIHk9Ijk4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjExMCIgeT0iOTgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTI2IiB5PSI5OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNDYiIHk9Ijk4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE1MCIgeT0iOTgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTU4IiB5PSI5OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNjYiIHk9Ijk4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE3NCIgeT0iOTgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTg2IiB5PSI5OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMDIiIHk9Ijk4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIwNiIgeT0iOTgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjE4IiB5PSI5OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMzAiIHk9Ijk4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI1NCIgeT0iOTgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjY2IiB5PSI5OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI1MCIgeT0iMTAyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjU4IiB5PSIxMDIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNjIiIHk9IjEwMiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI3MCIgeT0iMTAyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9Ijc0IiB5PSIxMDIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iODYiIHk9IjEwMiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI5MCIgeT0iMTAyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9Ijk0IiB5PSIxMDIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iOTgiIHk9IjEwMiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMDIiIHk9IjEwMiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMTgiIHk9IjEwMiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMjYiIHk9IjEwMiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMzgiIHk9IjEwMiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNDYiIHk9IjEwMiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNTAiIHk9IjEwMiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNTQiIHk9IjEwMiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNTgiIHk9IjEwMiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNjYiIHk9IjEwMiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNzAiIHk9IjEwMiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNzQiIHk9IjEwMiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxODYiIHk9IjEwMiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxOTQiIHk9IjEwMiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMDIiIHk9IjEwMiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMTAiIHk9IjEwMiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMjIiIHk9IjEwMiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMzQiIHk9IjEwMiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMzgiIHk9IjEwMiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNDIiIHk9IjEwMiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNTAiIHk9IjEwMiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNzAiIHk9IjEwMiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI0MiIgeT0iMTA2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjQ2IiB5PSIxMDYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNTAiIHk9IjEwNiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI1NCIgeT0iMTA2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjU4IiB5PSIxMDYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNjYiIHk9IjEwNiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI3OCIgeT0iMTA2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjkwIiB5PSIxMDYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iOTQiIHk9IjEwNiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI5OCIgeT0iMTA2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEwMiIgeT0iMTA2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEwNiIgeT0iMTA2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjExNCIgeT0iMTA2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjExOCIgeT0iMTA2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEyMiIgeT0iMTA2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEyNiIgeT0iMTA2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEzOCIgeT0iMTA2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE0MiIgeT0iMTA2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE0NiIgeT0iMTA2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE1NCIgeT0iMTA2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE3OCIgeT0iMTA2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE5NCIgeT0iMTA2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE5OCIgeT0iMTA2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIwNiIgeT0iMTA2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIxNCIgeT0iMTA2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIxOCIgeT0iMTA2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIyMiIgeT0iMTA2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIyNiIgeT0iMTA2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI1OCIgeT0iMTA2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI2MiIgeT0iMTA2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjM4IiB5PSIxMTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNDIiIHk9IjExMCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI0NiIgeT0iMTEwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjUwIiB5PSIxMTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNTQiIHk9IjExMCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI2MiIgeT0iMTEwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjcwIiB5PSIxMTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iOTAiIHk9IjExMCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI5NCIgeT0iMTEwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9Ijk4IiB5PSIxMTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTA2IiB5PSIxMTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTIyIiB5PSIxMTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTQyIiB5PSIxMTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTUwIiB5PSIxMTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTU4IiB5PSIxMTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTc0IiB5PSIxMTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTc4IiB5PSIxMTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTgyIiB5PSIxMTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjA2IiB5PSIxMTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjEwIiB5PSIxMTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjMwIiB5PSIxMTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjM0IiB5PSIxMTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjM4IiB5PSIxMTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjQ2IiB5PSIxMTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjU0IiB5PSIxMTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjU4IiB5PSIxMTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjY2IiB5PSIxMTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjcwIiB5PSIxMTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjc0IiB5PSIxMTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjc4IiB5PSIxMTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNDIiIHk9IjExNCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI0NiIgeT0iMTE0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjU0IiB5PSIxMTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNTgiIHk9IjExNCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI2NiIgeT0iMTE0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9Ijc0IiB5PSIxMTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iODIiIHk9IjExNCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI5NCIgeT0iMTE0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9Ijk4IiB5PSIxMTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTAyIiB5PSIxMTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTE4IiB5PSIxMTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTMwIiB5PSIxMTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTM0IiB5PSIxMTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTQ2IiB5PSIxMTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTUwIiB5PSIxMTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTU0IiB5PSIxMTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTYyIiB5PSIxMTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTY2IiB5PSIxMTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTc4IiB5PSIxMTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTgyIiB5PSIxMTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTg2IiB5PSIxMTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTk0IiB5PSIxMTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjAyIiB5PSIxMTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjA2IiB5PSIxMTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjEwIiB5PSIxMTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjE4IiB5PSIxMTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjI2IiB5PSIxMTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjMwIiB5PSIxMTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjM0IiB5PSIxMTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjU0IiB5PSIxMTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjU4IiB5PSIxMTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjYyIiB5PSIxMTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjc0IiB5PSIxMTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNjIiIHk9IjExOCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI2NiIgeT0iMTE4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjgyIiB5PSIxMTgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iODYiIHk9IjExOCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI5OCIgeT0iMTE4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEyMiIgeT0iMTE4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEyNiIgeT0iMTE4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEzNCIgeT0iMTE4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEzOCIgeT0iMTE4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE0MiIgeT0iMTE4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE1OCIgeT0iMTE4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE2MiIgeT0iMTE4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE2NiIgeT0iMTE4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE4MiIgeT0iMTE4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE5MCIgeT0iMTE4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE5OCIgeT0iMTE4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIxMCIgeT0iMTE4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIyMiIgeT0iMTE4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIyNiIgeT0iMTE4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIzMCIgeT0iMTE4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIzOCIgeT0iMTE4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI0MiIgeT0iMTE4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI1MCIgeT0iMTE4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI1OCIgeT0iMTE4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI2MiIgeT0iMTE4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI3OCIgeT0iMTE4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjQyIiB5PSIxMjIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNTAiIHk9IjEyMiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI1OCIgeT0iMTIyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjcwIiB5PSIxMjIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNzQiIHk9IjEyMiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI3OCIgeT0iMTIyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9Ijk0IiB5PSIxMjIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTAyIiB5PSIxMjIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTA2IiB5PSIxMjIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTEwIiB5PSIxMjIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTE0IiB5PSIxMjIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTE4IiB5PSIxMjIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTIyIiB5PSIxMjIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTI2IiB5PSIxMjIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTYyIiB5PSIxMjIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTY2IiB5PSIxMjIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTcwIiB5PSIxMjIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTc4IiB5PSIxMjIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTg2IiB5PSIxMjIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTkwIiB5PSIxMjIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTk0IiB5PSIxMjIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTk4IiB5PSIxMjIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjAyIiB5PSIxMjIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjE0IiB5PSIxMjIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjU0IiB5PSIxMjIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjU4IiB5PSIxMjIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjYyIiB5PSIxMjIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjY2IiB5PSIxMjIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjc0IiB5PSIxMjIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjc4IiB5PSIxMjIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMzgiIHk9IjEyNiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI0MiIgeT0iMTI2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjU4IiB5PSIxMjYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNjIiIHk9IjEyNiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI3OCIgeT0iMTI2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEwNiIgeT0iMTI2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjExMCIgeT0iMTI2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjExNCIgeT0iMTI2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEyMiIgeT0iMTI2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEyNiIgeT0iMTI2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEzMCIgeT0iMTI2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEzOCIgeT0iMTI2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE0NiIgeT0iMTI2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE1MCIgeT0iMTI2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE1NCIgeT0iMTI2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE1OCIgeT0iMTI2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE2MiIgeT0iMTI2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE2NiIgeT0iMTI2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE3NCIgeT0iMTI2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIwNiIgeT0iMTI2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIxMCIgeT0iMTI2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIyMiIgeT0iMTI2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIyNiIgeT0iMTI2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIzMCIgeT0iMTI2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIzOCIgeT0iMTI2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI0NiIgeT0iMTI2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI1MCIgeT0iMTI2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI1NCIgeT0iMTI2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI1OCIgeT0iMTI2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI3MCIgeT0iMTI2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI3OCIgeT0iMTI2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjM4IiB5PSIxMzAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNDYiIHk9IjEzMCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI1NCIgeT0iMTMwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjcwIiB5PSIxMzAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNzQiIHk9IjEzMCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI3OCIgeT0iMTMwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjgyIiB5PSIxMzAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iOTAiIHk9IjEzMCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI5OCIgeT0iMTMwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEwMiIgeT0iMTMwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjExNCIgeT0iMTMwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjExOCIgeT0iMTMwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEzNCIgeT0iMTMwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE1MCIgeT0iMTMwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE1NCIgeT0iMTMwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE2MiIgeT0iMTMwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE2NiIgeT0iMTMwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE3NCIgeT0iMTMwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE3OCIgeT0iMTMwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE5MCIgeT0iMTMwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE5NCIgeT0iMTMwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIwMiIgeT0iMTMwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIwNiIgeT0iMTMwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIxNCIgeT0iMTMwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIxOCIgeT0iMTMwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIzMCIgeT0iMTMwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIzNCIgeT0iMTMwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI1MCIgeT0iMTMwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI1NCIgeT0iMTMwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI2NiIgeT0iMTMwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI3MCIgeT0iMTMwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjYyIiB5PSIxMzQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNjYiIHk9IjEzNCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI3MCIgeT0iMTM0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9Ijc4IiB5PSIxMzQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iODYiIHk9IjEzNCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMDIiIHk9IjEzNCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMDYiIHk9IjEzNCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMTQiIHk9IjEzNCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMzAiIHk9IjEzNCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMzgiIHk9IjEzNCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNDIiIHk9IjEzNCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNDYiIHk9IjEzNCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNTAiIHk9IjEzNCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNTQiIHk9IjEzNCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNzAiIHk9IjEzNCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNzQiIHk9IjEzNCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNzgiIHk9IjEzNCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxODIiIHk9IjEzNCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxOTAiIHk9IjEzNCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMTAiIHk9IjEzNCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMTQiIHk9IjEzNCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMjIiIHk9IjEzNCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMjYiIHk9IjEzNCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMzAiIHk9IjEzNCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMzgiIHk9IjEzNCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNDIiIHk9IjEzNCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNTgiIHk9IjEzNCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNzQiIHk9IjEzNCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNzgiIHk9IjEzNCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI0MiIgeT0iMTM4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjQ2IiB5PSIxMzgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNTAiIHk9IjEzOCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI3MCIgeT0iMTM4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjgyIiB5PSIxMzgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iODYiIHk9IjEzOCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI5MCIgeT0iMTM4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9Ijk0IiB5PSIxMzgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTAyIiB5PSIxMzgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTEwIiB5PSIxMzgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTE0IiB5PSIxMzgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTMwIiB5PSIxMzgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTQ2IiB5PSIxMzgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTU4IiB5PSIxMzgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTgyIiB5PSIxMzgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTkwIiB5PSIxMzgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTk4IiB5PSIxMzgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjAyIiB5PSIxMzgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjA2IiB5PSIxMzgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjE0IiB5PSIxMzgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjE4IiB5PSIxMzgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjQyIiB5PSIxMzgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjU0IiB5PSIxMzgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjYyIiB5PSIxMzgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjY2IiB5PSIxMzgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjc4IiB5PSIxMzgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNDIiIHk9IjE0MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI1NCIgeT0iMTQyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjYyIiB5PSIxNDIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNzAiIHk9IjE0MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI5NCIgeT0iMTQyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9Ijk4IiB5PSIxNDIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTAyIiB5PSIxNDIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTEwIiB5PSIxNDIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTE0IiB5PSIxNDIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTUwIiB5PSIxNDIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTU0IiB5PSIxNDIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTU4IiB5PSIxNDIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTY2IiB5PSIxNDIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTc4IiB5PSIxNDIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTgyIiB5PSIxNDIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTg2IiB5PSIxNDIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTk0IiB5PSIxNDIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjA2IiB5PSIxNDIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjE4IiB5PSIxNDIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjI2IiB5PSIxNDIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjMwIiB5PSIxNDIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjM0IiB5PSIxNDIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjM4IiB5PSIxNDIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjQyIiB5PSIxNDIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjUwIiB5PSIxNDIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjU0IiB5PSIxNDIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjU4IiB5PSIxNDIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjcwIiB5PSIxNDIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjc0IiB5PSIxNDIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjc4IiB5PSIxNDIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMzgiIHk9IjE0NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI0MiIgeT0iMTQ2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjQ2IiB5PSIxNDYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNTgiIHk9IjE0NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI2NiIgeT0iMTQ2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9Ijc4IiB5PSIxNDYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iODIiIHk9IjE0NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI5MCIgeT0iMTQ2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9Ijk0IiB5PSIxNDYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTEwIiB5PSIxNDYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTE0IiB5PSIxNDYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTE4IiB5PSIxNDYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTIyIiB5PSIxNDYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTI2IiB5PSIxNDYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTMwIiB5PSIxNDYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTM0IiB5PSIxNDYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTM4IiB5PSIxNDYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTQyIiB5PSIxNDYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTQ2IiB5PSIxNDYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTU0IiB5PSIxNDYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTYyIiB5PSIxNDYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTY2IiB5PSIxNDYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTc4IiB5PSIxNDYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTgyIiB5PSIxNDYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjAyIiB5PSIxNDYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjA2IiB5PSIxNDYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjE0IiB5PSIxNDYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjE4IiB5PSIxNDYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjM0IiB5PSIxNDYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjM4IiB5PSIxNDYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjQyIiB5PSIxNDYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjU0IiB5PSIxNDYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjYyIiB5PSIxNDYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNDIiIHk9IjE1MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI0NiIgeT0iMTUwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjUwIiB5PSIxNTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNTQiIHk9IjE1MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI1OCIgeT0iMTUwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjYyIiB5PSIxNTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNjYiIHk9IjE1MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI3MCIgeT0iMTUwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9Ijc0IiB5PSIxNTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iODYiIHk9IjE1MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI5MCIgeT0iMTUwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9Ijk4IiB5PSIxNTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTAyIiB5PSIxNTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTA2IiB5PSIxNTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTEwIiB5PSIxNTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTE4IiB5PSIxNTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTIyIiB5PSIxNTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTI2IiB5PSIxNTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTMwIiB5PSIxNTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTM0IiB5PSIxNTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTQyIiB5PSIxNTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTQ2IiB5PSIxNTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTUwIiB5PSIxNTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTU0IiB5PSIxNTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTU4IiB5PSIxNTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTYyIiB5PSIxNTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTY2IiB5PSIxNTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTc0IiB5PSIxNTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTc4IiB5PSIxNTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTkwIiB5PSIxNTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTk4IiB5PSIxNTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjEwIiB5PSIxNTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjE0IiB5PSIxNTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjIyIiB5PSIxNTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjM4IiB5PSIxNTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjQ2IiB5PSIxNTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjUwIiB5PSIxNTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjU0IiB5PSIxNTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjU4IiB5PSIxNTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjYyIiB5PSIxNTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjY2IiB5PSIxNTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjc0IiB5PSIxNTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjc4IiB5PSIxNTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNDIiIHk9IjE1NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI0NiIgeT0iMTU0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjU0IiB5PSIxNTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNzAiIHk9IjE1NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI3NCIgeT0iMTU0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjgyIiB5PSIxNTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iODYiIHk9IjE1NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI5MCIgeT0iMTU0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9Ijk0IiB5PSIxNTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTAyIiB5PSIxNTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTA2IiB5PSIxNTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTEwIiB5PSIxNTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTE4IiB5PSIxNTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTM0IiB5PSIxNTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTM4IiB5PSIxNTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTQyIiB5PSIxNTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTQ2IiB5PSIxNTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTUwIiB5PSIxNTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTY2IiB5PSIxNTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTcwIiB5PSIxNTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTgyIiB5PSIxNTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTg2IiB5PSIxNTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTkwIiB5PSIxNTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTk0IiB5PSIxNTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTk4IiB5PSIxNTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjA2IiB5PSIxNTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjE0IiB5PSIxNTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjE4IiB5PSIxNTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjI2IiB5PSIxNTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjM0IiB5PSIxNTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjM4IiB5PSIxNTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjQ2IiB5PSIxNTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjYyIiB5PSIxNTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjY2IiB5PSIxNTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMzgiIHk9IjE1OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI1MCIgeT0iMTU4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjU0IiB5PSIxNTgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNjIiIHk9IjE1OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI3MCIgeT0iMTU4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9Ijc0IiB5PSIxNTgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNzgiIHk9IjE1OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI4MiIgeT0iMTU4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9Ijg2IiB5PSIxNTgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iOTAiIHk9IjE1OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMTAiIHk9IjE1OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMTQiIHk9IjE1OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMjYiIHk9IjE1OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMzQiIHk9IjE1OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNDIiIHk9IjE1OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNTAiIHk9IjE1OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNTgiIHk9IjE1OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNjYiIHk9IjE1OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNzAiIHk9IjE1OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxOTgiIHk9IjE1OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMDIiIHk9IjE1OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMDYiIHk9IjE1OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMjIiIHk9IjE1OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMzAiIHk9IjE1OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNDIiIHk9IjE1OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNDYiIHk9IjE1OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNTQiIHk9IjE1OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNjIiIHk9IjE1OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNjYiIHk9IjE1OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNzAiIHk9IjE1OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNzgiIHk9IjE1OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI1MCIgeT0iMTYyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjU0IiB5PSIxNjIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNzAiIHk9IjE2MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI3NCIgeT0iMTYyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjgyIiB5PSIxNjIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iODYiIHk9IjE2MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI5OCIgeT0iMTYyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjExOCIgeT0iMTYyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEzOCIgeT0iMTYyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE0NiIgeT0iMTYyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE1MCIgeT0iMTYyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE2NiIgeT0iMTYyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE3MCIgeT0iMTYyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE3NCIgeT0iMTYyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE3OCIgeT0iMTYyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE5MCIgeT0iMTYyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIwMiIgeT0iMTYyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIwNiIgeT0iMTYyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIxMCIgeT0iMTYyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIxNCIgeT0iMTYyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIzMCIgeT0iMTYyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIzNCIgeT0iMTYyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI0MiIgeT0iMTYyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI0NiIgeT0iMTYyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI2MiIgeT0iMTYyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI2NiIgeT0iMTYyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjM4IiB5PSIxNjYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNDIiIHk9IjE2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI0NiIgeT0iMTY2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjUwIiB5PSIxNjYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNTQiIHk9IjE2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI1OCIgeT0iMTY2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjYyIiB5PSIxNjYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNjYiIHk9IjE2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI3MCIgeT0iMTY2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9Ijc4IiB5PSIxNjYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iODIiIHk9IjE2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMDIiIHk9IjE2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMDYiIHk9IjE2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMTAiIHk9IjE2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMTQiIHk9IjE2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMTgiIHk9IjE2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMzQiIHk9IjE2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNDIiIHk9IjE2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNDYiIHk9IjE2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNTAiIHk9IjE2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNTQiIHk9IjE2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNTgiIHk9IjE2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNjIiIHk9IjE2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNjYiIHk9IjE2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxODIiIHk9IjE2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxODYiIHk9IjE2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxOTQiIHk9IjE2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxOTgiIHk9IjE2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMTAiIHk9IjE2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMTQiIHk9IjE2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMTgiIHk9IjE2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMjIiIHk9IjE2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMjYiIHk9IjE2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMzAiIHk9IjE2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMzQiIHk9IjE2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMzgiIHk9IjE2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNDYiIHk9IjE2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNTAiIHk9IjE2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNTQiIHk9IjE2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNTgiIHk9IjE2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNjIiIHk9IjE2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNzAiIHk9IjE2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNzQiIHk9IjE2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNzgiIHk9IjE2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIzOCIgeT0iMTcwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjQ2IiB5PSIxNzAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNTAiIHk9IjE3MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI1NCIgeT0iMTcwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjcwIiB5PSIxNzAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNzQiIHk9IjE3MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI4MiIgeT0iMTcwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9Ijg2IiB5PSIxNzAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iOTAiIHk9IjE3MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI5NCIgeT0iMTcwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEwMiIgeT0iMTcwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEwNiIgeT0iMTcwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjExMCIgeT0iMTcwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEyMiIgeT0iMTcwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEzNCIgeT0iMTcwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE0MiIgeT0iMTcwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE0NiIgeT0iMTcwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE1MCIgeT0iMTcwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE2MiIgeT0iMTcwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE2NiIgeT0iMTcwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE3MCIgeT0iMTcwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE4MiIgeT0iMTcwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE5NCIgeT0iMTcwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE5OCIgeT0iMTcwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIwMiIgeT0iMTcwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIwNiIgeT0iMTcwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIxNCIgeT0iMTcwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIyNiIgeT0iMTcwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIzNCIgeT0iMTcwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI1MCIgeT0iMTcwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI2NiIgeT0iMTcwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjM4IiB5PSIxNzQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNDIiIHk9IjE3NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI0NiIgeT0iMTc0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjUwIiB5PSIxNzQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNTQiIHk9IjE3NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI1OCIgeT0iMTc0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjYyIiB5PSIxNzQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNjYiIHk9IjE3NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI3NCIgeT0iMTc0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9Ijc4IiB5PSIxNzQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iODIiIHk9IjE3NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI4NiIgeT0iMTc0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjkwIiB5PSIxNzQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iOTgiIHk9IjE3NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMDIiIHk9IjE3NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMDYiIHk9IjE3NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMTgiIHk9IjE3NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMjIiIHk9IjE3NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMzAiIHk9IjE3NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMzQiIHk9IjE3NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNDIiIHk9IjE3NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNTAiIHk9IjE3NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNTQiIHk9IjE3NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNjIiIHk9IjE3NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNzAiIHk9IjE3NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxOTQiIHk9IjE3NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxOTgiIHk9IjE3NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMDYiIHk9IjE3NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMjYiIHk9IjE3NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMzAiIHk9IjE3NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNDIiIHk9IjE3NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNDYiIHk9IjE3NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNjIiIHk9IjE3NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNzAiIHk9IjE3NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNzQiIHk9IjE3NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNzgiIHk9IjE3NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIzOCIgeT0iMTc4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjQyIiB5PSIxNzgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNTAiIHk9IjE3OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI1NCIgeT0iMTc4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9Ijc0IiB5PSIxNzgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNzgiIHk9IjE3OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI4NiIgeT0iMTc4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEwMiIgeT0iMTc4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEyMiIgeT0iMTc4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEzMCIgeT0iMTc4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEzNCIgeT0iMTc4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE0NiIgeT0iMTc4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE1MCIgeT0iMTc4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE2MiIgeT0iMTc4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE2NiIgeT0iMTc4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE3NCIgeT0iMTc4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE4NiIgeT0iMTc4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIwMiIgeT0iMTc4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIwNiIgeT0iMTc4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIyNiIgeT0iMTc4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIzNCIgeT0iMTc4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI0MiIgeT0iMTc4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI0NiIgeT0iMTc4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI1MCIgeT0iMTc4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI1NCIgeT0iMTc4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI1OCIgeT0iMTc4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI2NiIgeT0iMTc4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI3NCIgeT0iMTc4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjM4IiB5PSIxODIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNDYiIHk9IjE4MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI1OCIgeT0iMTgyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjYyIiB5PSIxODIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNjYiIHk9IjE4MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI3NCIgeT0iMTgyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9Ijc4IiB5PSIxODIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iODIiIHk9IjE4MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI4NiIgeT0iMTgyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9Ijk0IiB5PSIxODIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTAyIiB5PSIxODIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTEwIiB5PSIxODIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTE0IiB5PSIxODIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTE4IiB5PSIxODIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTI2IiB5PSIxODIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTM0IiB5PSIxODIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTQyIiB5PSIxODIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTQ2IiB5PSIxODIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTUwIiB5PSIxODIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTU4IiB5PSIxODIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTY2IiB5PSIxODIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTgyIiB5PSIxODIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTg2IiB5PSIxODIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTk0IiB5PSIxODIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjEwIiB5PSIxODIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjE0IiB5PSIxODIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjE4IiB5PSIxODIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjIyIiB5PSIxODIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjMwIiB5PSIxODIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjM4IiB5PSIxODIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjQyIiB5PSIxODIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjU0IiB5PSIxODIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjU4IiB5PSIxODIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjY2IiB5PSIxODIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjc4IiB5PSIxODIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMzgiIHk9IjE4NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI0MiIgeT0iMTg2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjQ2IiB5PSIxODYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNTAiIHk9IjE4NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI1NCIgeT0iMTg2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjY2IiB5PSIxODYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNzAiIHk9IjE4NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI3NCIgeT0iMTg2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjgyIiB5PSIxODYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTE4IiB5PSIxODYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTMwIiB5PSIxODYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTM4IiB5PSIxODYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTUwIiB5PSIxODYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTU0IiB5PSIxODYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTcwIiB5PSIxODYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTc0IiB5PSIxODYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTc4IiB5PSIxODYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTkwIiB5PSIxODYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjAyIiB5PSIxODYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjA2IiB5PSIxODYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjE0IiB5PSIxODYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjE4IiB5PSIxODYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjQ2IiB5PSIxODYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjUwIiB5PSIxODYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjU4IiB5PSIxODYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjY2IiB5PSIxODYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjc0IiB5PSIxODYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjc4IiB5PSIxODYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMzgiIHk9IjE5MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI1NCIgeT0iMTkwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjU4IiB5PSIxOTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNjIiIHk9IjE5MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI3MCIgeT0iMTkwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9Ijc4IiB5PSIxOTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iODYiIHk9IjE5MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI5OCIgeT0iMTkwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEwNiIgeT0iMTkwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjExMCIgeT0iMTkwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjExNCIgeT0iMTkwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjExOCIgeT0iMTkwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEyNiIgeT0iMTkwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE1MCIgeT0iMTkwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE1NCIgeT0iMTkwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE1OCIgeT0iMTkwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE2NiIgeT0iMTkwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE3NCIgeT0iMTkwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE3OCIgeT0iMTkwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE4MiIgeT0iMTkwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE5MCIgeT0iMTkwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE5NCIgeT0iMTkwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIwNiIgeT0iMTkwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIxMCIgeT0iMTkwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIxNCIgeT0iMTkwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIyNiIgeT0iMTkwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIzMCIgeT0iMTkwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIzNCIgeT0iMTkwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIzOCIgeT0iMTkwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI0MiIgeT0iMTkwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI1NCIgeT0iMTkwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI2MiIgeT0iMTkwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI3MCIgeT0iMTkwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI3OCIgeT0iMTkwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjM4IiB5PSIxOTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNDIiIHk9IjE5NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI1OCIgeT0iMTk0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjcwIiB5PSIxOTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNzgiIHk9IjE5NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI4NiIgeT0iMTk0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjkwIiB5PSIxOTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iOTQiIHk9IjE5NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI5OCIgeT0iMTk0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEwNiIgeT0iMTk0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjExNCIgeT0iMTk0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjExOCIgeT0iMTk0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEyNiIgeT0iMTk0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEzMCIgeT0iMTk0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEzNCIgeT0iMTk0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE1MCIgeT0iMTk0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE1OCIgeT0iMTk0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE2MiIgeT0iMTk0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE3MCIgeT0iMTk0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE3OCIgeT0iMTk0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE4NiIgeT0iMTk0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE5MCIgeT0iMTk0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE5NCIgeT0iMTk0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIwNiIgeT0iMTk0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIxMCIgeT0iMTk0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIxOCIgeT0iMTk0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIzMCIgeT0iMTk0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI0NiIgeT0iMTk0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI1NCIgeT0iMTk0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI1OCIgeT0iMTk0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI2NiIgeT0iMTk0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI3MCIgeT0iMTk0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjM4IiB5PSIxOTgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNDIiIHk9IjE5OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI1OCIgeT0iMTk4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjYyIiB5PSIxOTgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNjYiIHk9IjE5OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI3OCIgeT0iMTk4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjgyIiB5PSIxOTgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iODYiIHk9IjE5OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMTAiIHk9IjE5OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMTQiIHk9IjE5OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMTgiIHk9IjE5OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMjIiIHk9IjE5OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMzAiIHk9IjE5OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMzgiIHk9IjE5OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNDYiIHk9IjE5OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNTQiIHk9IjE5OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNTgiIHk9IjE5OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNzAiIHk9IjE5OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxOTAiIHk9IjE5OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxOTQiIHk9IjE5OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMDIiIHk9IjE5OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMTAiIHk9IjE5OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMzgiIHk9IjE5OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNDIiIHk9IjE5OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNTQiIHk9IjE5OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNTgiIHk9IjE5OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNjIiIHk9IjE5OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNjYiIHk9IjE5OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNzQiIHk9IjE5OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNzgiIHk9IjE5OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIzOCIgeT0iMjAyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjU0IiB5PSIyMDIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNzAiIHk9IjIwMiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI4NiIgeT0iMjAyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjkwIiB5PSIyMDIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iOTQiIHk9IjIwMiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI5OCIgeT0iMjAyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEwMiIgeT0iMjAyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjExMCIgeT0iMjAyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjExNCIgeT0iMjAyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEyMiIgeT0iMjAyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEyNiIgeT0iMjAyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE0MiIgeT0iMjAyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE0NiIgeT0iMjAyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE1MCIgeT0iMjAyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE1NCIgeT0iMjAyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE2MiIgeT0iMjAyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE3MCIgeT0iMjAyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE3OCIgeT0iMjAyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE5MCIgeT0iMjAyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE5OCIgeT0iMjAyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIwNiIgeT0iMjAyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIxNCIgeT0iMjAyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIxOCIgeT0iMjAyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIzNCIgeT0iMjAyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIzOCIgeT0iMjAyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI0NiIgeT0iMjAyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjM4IiB5PSIyMDYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNDIiIHk9IjIwNiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI0NiIgeT0iMjA2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjYyIiB5PSIyMDYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNzAiIHk9IjIwNiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI4MiIgeT0iMjA2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjkwIiB5PSIyMDYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iOTQiIHk9IjIwNiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI5OCIgeT0iMjA2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEwMiIgeT0iMjA2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjExMCIgeT0iMjA2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEyMiIgeT0iMjA2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEyNiIgeT0iMjA2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEzNCIgeT0iMjA2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE0NiIgeT0iMjA2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE2MiIgeT0iMjA2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE3MCIgeT0iMjA2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE3NCIgeT0iMjA2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE3OCIgeT0iMjA2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE4MiIgeT0iMjA2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE4NiIgeT0iMjA2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE5MCIgeT0iMjA2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE5NCIgeT0iMjA2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIxMCIgeT0iMjA2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIyNiIgeT0iMjA2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIzMCIgeT0iMjA2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIzOCIgeT0iMjA2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI0MiIgeT0iMjA2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI1NCIgeT0iMjA2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI1OCIgeT0iMjA2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI2MiIgeT0iMjA2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI2NiIgeT0iMjA2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI3MCIgeT0iMjA2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI3OCIgeT0iMjA2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjQyIiB5PSIyMTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNDYiIHk9IjIxMCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI1MCIgeT0iMjEwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjcwIiB5PSIyMTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNzQiIHk9IjIxMCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI3OCIgeT0iMjEwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjgyIiB5PSIyMTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iOTAiIHk9IjIxMCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMDIiIHk9IjIxMCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMTQiIHk9IjIxMCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMjYiIHk9IjIxMCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMzAiIHk9IjIxMCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMzQiIHk9IjIxMCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNTAiIHk9IjIxMCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNTgiIHk9IjIxMCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNjIiIHk9IjIxMCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNzAiIHk9IjIxMCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxODYiIHk9IjIxMCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxOTAiIHk9IjIxMCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMDYiIHk9IjIxMCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMTQiIHk9IjIxMCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMTgiIHk9IjIxMCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMzAiIHk9IjIxMCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMzQiIHk9IjIxMCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNTAiIHk9IjIxMCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNzQiIHk9IjIxMCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIzOCIgeT0iMjE0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjQyIiB5PSIyMTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNTgiIHk9IjIxNCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI2MiIgeT0iMjE0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjY2IiB5PSIyMTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNzAiIHk9IjIxNCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI3NCIgeT0iMjE0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9Ijc4IiB5PSIyMTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iODIiIHk9IjIxNCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI4NiIgeT0iMjE0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjkwIiB5PSIyMTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iOTQiIHk9IjIxNCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI5OCIgeT0iMjE0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEwMiIgeT0iMjE0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjExMCIgeT0iMjE0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjExOCIgeT0iMjE0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEzNCIgeT0iMjE0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE0NiIgeT0iMjE0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE1NCIgeT0iMjE0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE2NiIgeT0iMjE0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE3MCIgeT0iMjE0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE3OCIgeT0iMjE0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE4MiIgeT0iMjE0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE4NiIgeT0iMjE0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE5MCIgeT0iMjE0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIwMiIgeT0iMjE0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIyMiIgeT0iMjE0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIzMCIgeT0iMjE0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIzOCIgeT0iMjE0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI0MiIgeT0iMjE0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI1MCIgeT0iMjE0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI1NCIgeT0iMjE0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI3NCIgeT0iMjE0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI3OCIgeT0iMjE0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjQyIiB5PSIyMTgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNTgiIHk9IjIxOCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI3NCIgeT0iMjE4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9Ijc4IiB5PSIyMTgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iOTAiIHk9IjIxOCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI5NCIgeT0iMjE4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9Ijk4IiB5PSIyMTgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTAyIiB5PSIyMTgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTA2IiB5PSIyMTgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTE0IiB5PSIyMTgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTE4IiB5PSIyMTgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTIyIiB5PSIyMTgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTM0IiB5PSIyMTgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTQ2IiB5PSIyMTgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTU0IiB5PSIyMTgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTU4IiB5PSIyMTgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTc4IiB5PSIyMTgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTgyIiB5PSIyMTgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTg2IiB5PSIyMTgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTk4IiB5PSIyMTgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjAyIiB5PSIyMTgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjA2IiB5PSIyMTgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjE0IiB5PSIyMTgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjE4IiB5PSIyMTgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjIyIiB5PSIyMTgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjI2IiB5PSIyMTgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjM0IiB5PSIyMTgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjM4IiB5PSIyMTgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjQ2IiB5PSIyMTgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjU4IiB5PSIyMTgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjY2IiB5PSIyMTgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjc0IiB5PSIyMTgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNTAiIHk9IjIyMiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI1OCIgeT0iMjIyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjYyIiB5PSIyMjIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iODIiIHk9IjIyMiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI4NiIgeT0iMjIyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjkwIiB5PSIyMjIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iOTQiIHk9IjIyMiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI5OCIgeT0iMjIyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEwNiIgeT0iMjIyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjExOCIgeT0iMjIyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEyNiIgeT0iMjIyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE0MiIgeT0iMjIyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE1MCIgeT0iMjIyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE1OCIgeT0iMjIyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE3MCIgeT0iMjIyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE3NCIgeT0iMjIyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE4MiIgeT0iMjIyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE4NiIgeT0iMjIyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE5NCIgeT0iMjIyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIwNiIgeT0iMjIyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIxMCIgeT0iMjIyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIxOCIgeT0iMjIyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIyMiIgeT0iMjIyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIyNiIgeT0iMjIyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIzMCIgeT0iMjIyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIzOCIgeT0iMjIyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI0MiIgeT0iMjIyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI2MiIgeT0iMjIyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI2NiIgeT0iMjIyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI3NCIgeT0iMjIyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjQyIiB5PSIyMjYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNDYiIHk9IjIyNiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI1NCIgeT0iMjI2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9Ijc4IiB5PSIyMjYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iODYiIHk9IjIyNiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI5OCIgeT0iMjI2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEwMiIgeT0iMjI2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEwNiIgeT0iMjI2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjExMCIgeT0iMjI2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjExNCIgeT0iMjI2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjExOCIgeT0iMjI2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEyMiIgeT0iMjI2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEyNiIgeT0iMjI2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEzMCIgeT0iMjI2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEzNCIgeT0iMjI2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE0MiIgeT0iMjI2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE0NiIgeT0iMjI2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE1MCIgeT0iMjI2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE1NCIgeT0iMjI2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE2MiIgeT0iMjI2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE2NiIgeT0iMjI2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE3MCIgeT0iMjI2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE3NCIgeT0iMjI2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE3OCIgeT0iMjI2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE5MCIgeT0iMjI2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE5OCIgeT0iMjI2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIwMiIgeT0iMjI2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIwNiIgeT0iMjI2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIxNCIgeT0iMjI2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIyNiIgeT0iMjI2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIzMCIgeT0iMjI2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI0MiIgeT0iMjI2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI0NiIgeT0iMjI2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI1NCIgeT0iMjI2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI1OCIgeT0iMjI2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI2NiIgeT0iMjI2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjM4IiB5PSIyMzAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNDYiIHk9IjIzMCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI1MCIgeT0iMjMwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjU4IiB5PSIyMzAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNjIiIHk9IjIzMCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI2NiIgeT0iMjMwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9Ijc4IiB5PSIyMzAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTA2IiB5PSIyMzAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTE4IiB5PSIyMzAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTIyIiB5PSIyMzAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTI2IiB5PSIyMzAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTQyIiB5PSIyMzAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTQ2IiB5PSIyMzAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTY2IiB5PSIyMzAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTc0IiB5PSIyMzAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTc4IiB5PSIyMzAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTgyIiB5PSIyMzAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjIyIiB5PSIyMzAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjMwIiB5PSIyMzAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjM0IiB5PSIyMzAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjM4IiB5PSIyMzAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjQyIiB5PSIyMzAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjUwIiB5PSIyMzAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjU0IiB5PSIyMzAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjU4IiB5PSIyMzAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjYyIiB5PSIyMzAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjY2IiB5PSIyMzAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjc0IiB5PSIyMzAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjc4IiB5PSIyMzAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNDYiIHk9IjIzNCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI1MCIgeT0iMjM0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjU4IiB5PSIyMzQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNjYiIHk9IjIzNCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI4NiIgeT0iMjM0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjkwIiB5PSIyMzQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iOTQiIHk9IjIzNCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMDIiIHk9IjIzNCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMTQiIHk9IjIzNCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMzAiIHk9IjIzNCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMzQiIHk9IjIzNCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMzgiIHk9IjIzNCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNDIiIHk9IjIzNCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNDYiIHk9IjIzNCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNTQiIHk9IjIzNCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNTgiIHk9IjIzNCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNjIiIHk9IjIzNCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNzAiIHk9IjIzNCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNzQiIHk9IjIzNCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNzgiIHk9IjIzNCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxODIiIHk9IjIzNCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxODYiIHk9IjIzNCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxOTgiIHk9IjIzNCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMDYiIHk9IjIzNCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMTQiIHk9IjIzNCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMTgiIHk9IjIzNCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMjYiIHk9IjIzNCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMzAiIHk9IjIzNCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNDYiIHk9IjIzNCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNzQiIHk9IjIzNCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNzgiIHk9IjIzNCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI0NiIgeT0iMjM4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjUwIiB5PSIyMzgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNTQiIHk9IjIzOCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI1OCIgeT0iMjM4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjYyIiB5PSIyMzgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNjYiIHk9IjIzOCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI3MCIgeT0iMjM4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9Ijc0IiB5PSIyMzgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iODIiIHk9IjIzOCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI5MCIgeT0iMjM4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9Ijk0IiB5PSIyMzgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iOTgiIHk9IjIzOCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMDIiIHk9IjIzOCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMDYiIHk9IjIzOCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMjIiIHk9IjIzOCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMjYiIHk9IjIzOCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMzQiIHk9IjIzOCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMzgiIHk9IjIzOCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNDIiIHk9IjIzOCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNTAiIHk9IjIzOCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNTQiIHk9IjIzOCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNTgiIHk9IjIzOCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNjIiIHk9IjIzOCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNjYiIHk9IjIzOCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNzAiIHk9IjIzOCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNzgiIHk9IjIzOCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxODIiIHk9IjIzOCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxOTAiIHk9IjIzOCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxOTQiIHk9IjIzOCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMDIiIHk9IjIzOCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMDYiIHk9IjIzOCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMTAiIHk9IjIzOCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMTgiIHk9IjIzOCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMjIiIHk9IjIzOCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMzAiIHk9IjIzOCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMzgiIHk9IjIzOCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNDIiIHk9IjIzOCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNDYiIHk9IjIzOCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNTQiIHk9IjIzOCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNjIiIHk9IjIzOCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNzAiIHk9IjIzOCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNzgiIHk9IjIzOCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIzOCIgeT0iMjQyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjQyIiB5PSIyNDIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNDYiIHk9IjI0MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI1NCIgeT0iMjQyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9Ijc0IiB5PSIyNDIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNzgiIHk9IjI0MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI4MiIgeT0iMjQyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjkwIiB5PSIyNDIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iOTQiIHk9IjI0MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMDYiIHk9IjI0MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMTgiIHk9IjI0MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMjIiIHk9IjI0MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMjYiIHk9IjI0MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMzAiIHk9IjI0MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMzQiIHk9IjI0MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNTAiIHk9IjI0MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNjIiIHk9IjI0MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNjYiIHk9IjI0MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNzAiIHk9IjI0MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNzQiIHk9IjI0MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNzgiIHk9IjI0MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxODIiIHk9IjI0MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxODYiIHk9IjI0MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxOTAiIHk9IjI0MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxOTgiIHk9IjI0MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMDIiIHk9IjI0MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMTQiIHk9IjI0MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMjYiIHk9IjI0MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMzAiIHk9IjI0MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMzQiIHk9IjI0MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNDYiIHk9IjI0MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNTAiIHk9IjI0MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNTQiIHk9IjI0MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNTgiIHk9IjI0MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNjYiIHk9IjI0MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIzOCIgeT0iMjQ2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjQyIiB5PSIyNDYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNDYiIHk9IjI0NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI1MCIgeT0iMjQ2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjYyIiB5PSIyNDYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNjYiIHk9IjI0NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI3MCIgeT0iMjQ2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9Ijc0IiB5PSIyNDYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iOTgiIHk9IjI0NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMTAiIHk9IjI0NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMjYiIHk9IjI0NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMzQiIHk9IjI0NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNTAiIHk9IjI0NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNTQiIHk9IjI0NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNTgiIHk9IjI0NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNjIiIHk9IjI0NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNjYiIHk9IjI0NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNzAiIHk9IjI0NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNzQiIHk9IjI0NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxODYiIHk9IjI0NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxOTAiIHk9IjI0NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxOTQiIHk9IjI0NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMTgiIHk9IjI0NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMjIiIHk9IjI0NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMjYiIHk9IjI0NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMzAiIHk9IjI0NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMzgiIHk9IjI0NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNDYiIHk9IjI0NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNTAiIHk9IjI0NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNTQiIHk9IjI0NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNTgiIHk9IjI0NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNjIiIHk9IjI0NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNzAiIHk9IjI0NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNzQiIHk9IjI0NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNzgiIHk9IjI0NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI3MCIgeT0iMjUwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9Ijg2IiB5PSIyNTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iOTgiIHk9IjI1MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMTAiIHk9IjI1MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMTQiIHk9IjI1MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMTgiIHk9IjI1MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMjYiIHk9IjI1MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMzAiIHk9IjI1MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMzQiIHk9IjI1MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNDIiIHk9IjI1MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNDYiIHk9IjI1MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNTAiIHk9IjI1MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNjYiIHk9IjI1MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNzAiIHk9IjI1MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxODIiIHk9IjI1MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxOTQiIHk9IjI1MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxOTgiIHk9IjI1MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMDIiIHk9IjI1MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMTAiIHk9IjI1MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMTQiIHk9IjI1MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMjIiIHk9IjI1MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNDIiIHk9IjI1MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNDYiIHk9IjI1MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNjIiIHk9IjI1MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNzgiIHk9IjI1MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIzOCIgeT0iMjU0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjQyIiB5PSIyNTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNDYiIHk9IjI1NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI1MCIgeT0iMjU0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjU0IiB5PSIyNTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNTgiIHk9IjI1NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI2MiIgeT0iMjU0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9Ijc0IiB5PSIyNTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNzgiIHk9IjI1NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI5NCIgeT0iMjU0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEwNiIgeT0iMjU0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjExMCIgeT0iMjU0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjExNCIgeT0iMjU0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjExOCIgeT0iMjU0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEyNiIgeT0iMjU0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEzNCIgeT0iMjU0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEzOCIgeT0iMjU0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE0MiIgeT0iMjU0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE0NiIgeT0iMjU0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE1MCIgeT0iMjU0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE1OCIgeT0iMjU0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE2NiIgeT0iMjU0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE3OCIgeT0iMjU0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE4NiIgeT0iMjU0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIwNiIgeT0iMjU0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIyNiIgeT0iMjU0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIzMCIgeT0iMjU0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIzNCIgeT0iMjU0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI0NiIgeT0iMjU0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI1NCIgeT0iMjU0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI2MiIgeT0iMjU0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI3MCIgeT0iMjU0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI3NCIgeT0iMjU0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI3OCIgeT0iMjU0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjM4IiB5PSIyNTgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNjIiIHk9IjI1OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI3OCIgeT0iMjU4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjgyIiB5PSIyNTgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iODYiIHk9IjI1OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMTAiIHk9IjI1OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMTgiIHk9IjI1OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMjIiIHk9IjI1OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMzAiIHk9IjI1OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMzgiIHk9IjI1OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNDYiIHk9IjI1OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNTAiIHk9IjI1OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNjYiIHk9IjI1OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxOTAiIHk9IjI1OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxOTgiIHk9IjI1OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMDIiIHk9IjI1OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMDYiIHk9IjI1OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMTAiIHk9IjI1OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMjYiIHk9IjI1OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMzAiIHk9IjI1OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNDIiIHk9IjI1OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNDYiIHk9IjI1OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNjIiIHk9IjI1OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNjYiIHk9IjI1OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIzOCIgeT0iMjYyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjQ2IiB5PSIyNjIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNTAiIHk9IjI2MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI1NCIgeT0iMjYyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjYyIiB5PSIyNjIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNzAiIHk9IjI2MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI3NCIgeT0iMjYyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9Ijc4IiB5PSIyNjIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iOTAiIHk9IjI2MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMDIiIHk9IjI2MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMDYiIHk9IjI2MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMTAiIHk9IjI2MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMjIiIHk9IjI2MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMjYiIHk9IjI2MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMzAiIHk9IjI2MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNTAiIHk9IjI2MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNTQiIHk9IjI2MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNTgiIHk9IjI2MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNjIiIHk9IjI2MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNjYiIHk9IjI2MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNzAiIHk9IjI2MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxODYiIHk9IjI2MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxOTQiIHk9IjI2MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMjIiIHk9IjI2MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMzAiIHk9IjI2MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMzQiIHk9IjI2MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMzgiIHk9IjI2MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNDIiIHk9IjI2MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNDYiIHk9IjI2MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNTAiIHk9IjI2MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNTQiIHk9IjI2MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNTgiIHk9IjI2MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNjIiIHk9IjI2MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNjYiIHk9IjI2MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNzAiIHk9IjI2MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNzQiIHk9IjI2MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNzgiIHk9IjI2MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIzOCIgeT0iMjY2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjQ2IiB5PSIyNjYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNTAiIHk9IjI2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI1NCIgeT0iMjY2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjYyIiB5PSIyNjYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNzAiIHk9IjI2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI4MiIgeT0iMjY2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9Ijg2IiB5PSIyNjYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iOTgiIHk9IjI2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMDIiIHk9IjI2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMTAiIHk9IjI2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMTQiIHk9IjI2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMjIiIHk9IjI2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMzAiIHk9IjI2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMzQiIHk9IjI2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNDIiIHk9IjI2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNTAiIHk9IjI2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxODIiIHk9IjI2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxOTQiIHk9IjI2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxOTgiIHk9IjI2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMTAiIHk9IjI2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMTQiIHk9IjI2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMTgiIHk9IjI2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNDYiIHk9IjI2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNTAiIHk9IjI2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNTQiIHk9IjI2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNTgiIHk9IjI2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNjIiIHk9IjI2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNjYiIHk9IjI2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNzQiIHk9IjI2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNzgiIHk9IjI2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIzOCIgeT0iMjcwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjQ2IiB5PSIyNzAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNTAiIHk9IjI3MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI1NCIgeT0iMjcwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjYyIiB5PSIyNzAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNzAiIHk9IjI3MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI3NCIgeT0iMjcwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9Ijc4IiB5PSIyNzAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iODIiIHk9IjI3MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI4NiIgeT0iMjcwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjkwIiB5PSIyNzAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iOTQiIHk9IjI3MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMDIiIHk9IjI3MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMTAiIHk9IjI3MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMjYiIHk9IjI3MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMzAiIHk9IjI3MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMzQiIHk9IjI3MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNDYiIHk9IjI3MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNTAiIHk9IjI3MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNTQiIHk9IjI3MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNTgiIHk9IjI3MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNjIiIHk9IjI3MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNjYiIHk9IjI3MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNzgiIHk9IjI3MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxODYiIHk9IjI3MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMDIiIHk9IjI3MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMDYiIHk9IjI3MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMTgiIHk9IjI3MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMjIiIHk9IjI3MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMjYiIHk9IjI3MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMzAiIHk9IjI3MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMzQiIHk9IjI3MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMzgiIHk9IjI3MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNTAiIHk9IjI3MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNjYiIHk9IjI3MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNzAiIHk9IjI3MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNzgiIHk9IjI3MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIzOCIgeT0iMjc0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjYyIiB5PSIyNzQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNzQiIHk9IjI3NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI4MiIgeT0iMjc0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjkwIiB5PSIyNzQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTA2IiB5PSIyNzQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTE0IiB5PSIyNzQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTIyIiB5PSIyNzQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTI2IiB5PSIyNzQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTM0IiB5PSIyNzQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTM4IiB5PSIyNzQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTQ2IiB5PSIyNzQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTUwIiB5PSIyNzQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTU4IiB5PSIyNzQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTYyIiB5PSIyNzQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTcwIiB5PSIyNzQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTc4IiB5PSIyNzQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTg2IiB5PSIyNzQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTk0IiB5PSIyNzQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjA2IiB5PSIyNzQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjEwIiB5PSIyNzQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjQ2IiB5PSIyNzQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjYyIiB5PSIyNzQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjcwIiB5PSIyNzQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjc0IiB5PSIyNzQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMzgiIHk9IjI3OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI0MiIgeT0iMjc4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjQ2IiB5PSIyNzgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNTAiIHk9IjI3OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI1NCIgeT0iMjc4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjU4IiB5PSIyNzgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNjIiIHk9IjI3OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI3OCIgeT0iMjc4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9Ijg2IiB5PSIyNzgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iOTAiIHk9IjI3OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI5OCIgeT0iMjc4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEwNiIgeT0iMjc4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjExMCIgeT0iMjc4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjExNCIgeT0iMjc4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEyMiIgeT0iMjc4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEyNiIgeT0iMjc4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEzMCIgeT0iMjc4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE1NCIgeT0iMjc4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE1OCIgeT0iMjc4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE2NiIgeT0iMjc4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE3MCIgeT0iMjc4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE3NCIgeT0iMjc4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE4MiIgeT0iMjc4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE5MCIgeT0iMjc4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE5NCIgeT0iMjc4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE5OCIgeT0iMjc4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIwMiIgeT0iMjc4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIxOCIgeT0iMjc4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIyMiIgeT0iMjc4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIzMCIgeT0iMjc4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIzNCIgeT0iMjc4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIzOCIgeT0iMjc4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI1NCIgeT0iMjc4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI1OCIgeT0iMjc4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI3MCIgeT0iMjc4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI3NCIgeT0iMjc4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI3OCIgeT0iMjc4IiB4bGluazpocmVmPSIjYmxvY2siLz48L3N2Zz4K",
                ],
              },
            },
          },
        },
      },
      $schema: "https://json-schema.org/draft/2020-12/schema#",
    },
  },
} as const;
const CreateManualPayout = {
  body: {
    type: "object",
    required: ["amount", "currency", "pspId"],
    properties: {
      amount: {
        type: "integer",
        description: "Amount of payout in cent.",
        format: "int32",
        minimum: -2147483648,
        maximum: 2147483647,
      },
      currency: {
        type: "string",
        description: "Currency of payment (ISO code).",
      },
      pspId: {
        type: "integer",
        description:
          "ID of the PSP from which the payout is to be triggered. 44 for Swiss Collecting and 36 for Payrexx Direct.",
        format: "int32",
        minimum: -2147483648,
        maximum: 2147483647,
      },
      statementDescriptor: {
        type: "string",
        description: "Statement of the payout. Visible in bank statement",
      },
    },
    $schema: "https://json-schema.org/draft/2020-12/schema#",
  },
  metadata: {
    allOf: [
      {
        type: "object",
        properties: {
          instance: {
            type: "string",
            $schema: "https://json-schema.org/draft/2020-12/schema#",
            description: "Your Payrexx instance name",
          },
        },
        required: ["instance"],
      },
    ],
  },
  response: {
    "200": {
      type: "object",
      properties: {
        status: { type: "string", examples: ["success"] },
        data: {
          type: "array",
          items: {
            type: "object",
            properties: {
              uuid: { type: "string", examples: ["C3F99526"] },
              object: { type: "string", examples: ["payout"] },
              amount: { type: "integer", default: 0, examples: [1200] },
              total_fees: { type: "integer", default: 0, examples: [0] },
              currency: { type: "string", examples: ["CHF"] },
              date: { type: "string", examples: ["2023-01-04"] },
              statement: { type: "string", examples: ["Payrexx"] },
              status: { type: "string", examples: ["pending"] },
              destination: {
                type: "object",
                properties: {
                  type: { type: "string", examples: ["bank_account"] },
                  iban: {
                    type: "string",
                    examples: ["CH93 0076 2011 6238 5295 7"],
                  },
                  account_holder: { type: "string", examples: ["Demo Firma"] },
                },
              },
              transfers: { type: "array", items: {} },
              merchant: {
                type: "object",
                properties: {
                  name: { type: "string", examples: ["demo"] },
                  site_title: { type: "string", examples: ["Payrexx"] },
                  owner: {
                    type: "object",
                    properties: {
                      company: { type: "string", examples: ["Demo Firma"] },
                      first_name: { type: "string", examples: ["Vorname"] },
                      last_name: { type: "string", examples: ["Nachname"] },
                      address: {
                        type: "string",
                        examples: ["strasse 1324 1234"],
                      },
                      zip: { type: "string", examples: ["1234"] },
                      place: { type: "string", examples: ["ort"] },
                      email: { type: "string", examples: ["info@payrexx.com"] },
                    },
                  },
                },
              },
            },
          },
        },
      },
      $schema: "https://json-schema.org/draft/2020-12/schema#",
    },
  },
} as const;
const DeleteADesign = {
  metadata: {
    allOf: [
      {
        type: "object",
        properties: {
          uuid: {
            type: "string",
            $schema: "https://json-schema.org/draft/2020-12/schema#",
            description: "UUID of design to delete",
          },
        },
        required: ["uuid"],
      },
      {
        type: "object",
        properties: {
          instance: {
            type: "string",
            $schema: "https://json-schema.org/draft/2020-12/schema#",
            description: "Your Payrexx instance name",
          },
        },
        required: ["instance"],
      },
    ],
  },
  response: {
    "200": {
      type: "object",
      properties: {
        status: { type: "string", examples: ["success"] },
        data: {
          type: "array",
          items: {
            type: "object",
            properties: { uuid: { type: "string", examples: ["f45aff72"] } },
          },
        },
      },
      $schema: "https://json-schema.org/draft/2020-12/schema#",
    },
  },
} as const;
const DeleteAGateway = {
  metadata: {
    allOf: [
      {
        type: "object",
        properties: {
          id: {
            type: "integer",
            format: "int32",
            default: 0,
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: "https://json-schema.org/draft/2020-12/schema#",
            description: "ID of gateway payment to delete.",
          },
        },
        required: ["id"],
      },
      {
        type: "object",
        properties: {
          instance: {
            type: "string",
            $schema: "https://json-schema.org/draft/2020-12/schema#",
            description: "Your Payrexx instance name",
          },
        },
        required: ["instance"],
      },
    ],
  },
  response: {
    "200": {
      type: "object",
      properties: {
        status: { type: "string", examples: ["success"] },
        data: {
          type: "array",
          items: {
            type: "object",
            properties: { id: { type: "integer", default: 0, examples: [1] } },
          },
        },
      },
      $schema: "https://json-schema.org/draft/2020-12/schema#",
    },
  },
} as const;
const DeleteAQrCode = {
  metadata: {
    allOf: [
      {
        type: "object",
        properties: {
          uuid: {
            type: "string",
            default: "36",
            $schema: "https://json-schema.org/draft/2020-12/schema#",
            description: "The UUIDv4 of the QR code to delete",
          },
        },
        required: ["uuid"],
      },
      {
        type: "object",
        properties: {
          instance: {
            type: "string",
            $schema: "https://json-schema.org/draft/2020-12/schema#",
            description: "Your Payrexx instance name",
          },
        },
        required: ["instance"],
      },
    ],
  },
  response: {
    "200": {
      type: "object",
      properties: {
        status: { type: "string", examples: ["success"] },
        data: {
          type: "array",
          items: {
            type: "object",
            properties: {
              uuid: {
                type: "string",
                examples: ["d351f609-d3d2-4424-a0dc-b282fdbebb7a"],
              },
            },
          },
        },
      },
      $schema: "https://json-schema.org/draft/2020-12/schema#",
    },
  },
} as const;
const DeleteAQrCodeScan = {
  body: {
    type: "object",
    required: ["sessionId"],
    properties: {
      sessionId: {
        type: "string",
        description: "The sessionId of the qr code scan to delete.",
      },
    },
    $schema: "https://json-schema.org/draft/2020-12/schema#",
  },
  metadata: {
    allOf: [
      {
        type: "object",
        properties: {
          instance: {
            type: "string",
            $schema: "https://json-schema.org/draft/2020-12/schema#",
            description: "Your Payrexx instance name",
          },
        },
        required: ["instance"],
      },
    ],
  },
  response: {
    "200": {
      type: "object",
      properties: {
        status: { type: "string", examples: ["success"] },
        data: {
          type: "array",
          items: {
            type: "object",
            properties: {
              sessionId: { type: "string", examples: ["f280284380c5df65"] },
            },
          },
        },
      },
      $schema: "https://json-schema.org/draft/2020-12/schema#",
    },
  },
} as const;
const DeleteAReservedTransaction = {
  metadata: {
    allOf: [
      {
        type: "object",
        properties: {
          id: {
            type: "integer",
            format: "int32",
            default: 0,
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: "https://json-schema.org/draft/2020-12/schema#",
            description: "ID of reserved transaction to cancel/delete.",
          },
        },
        required: ["id"],
      },
      {
        type: "object",
        properties: {
          instance: {
            type: "string",
            $schema: "https://json-schema.org/draft/2020-12/schema#",
            description: "Your Payrexx instance name.",
          },
        },
        required: ["instance"],
      },
    ],
  },
  response: {
    "200": {
      type: "object",
      properties: {
        status: { type: "string", examples: ["success"] },
        data: {
          type: "array",
          items: {
            type: "object",
            properties: { id: { type: "integer", default: 0, examples: [1] } },
          },
        },
      },
      $schema: "https://json-schema.org/draft/2020-12/schema#",
    },
  },
} as const;
const GetAllActivePaymentMethods = {
  body: {
    type: "object",
    properties: {
      filterCurrency: {
        type: "string",
        description: "The currency which is needed (e.g. CHF)",
      },
      filterPaymentType: {
        type: "string",
        description:
          "The payment type which is needed (possible values: one-time, reservation, authorization, subscription)",
      },
      filterPsp: {
        type: "integer",
        description:
          "The psp to filter for. Pass the ID of the payment service provider.",
        format: "int32",
        minimum: -2147483648,
        maximum: 2147483647,
      },
    },
    $schema: "https://json-schema.org/draft/2020-12/schema#",
  },
  metadata: {
    allOf: [
      {
        type: "object",
        properties: {
          instance: {
            type: "string",
            $schema: "https://json-schema.org/draft/2020-12/schema#",
            description: "Your Payrexx instance name",
          },
        },
        required: ["instance"],
      },
    ],
  },
  response: {
    "200": { $schema: "https://json-schema.org/draft/2020-12/schema#" },
    "400": {
      type: "object",
      properties: {},
      $schema: "https://json-schema.org/draft/2020-12/schema#",
    },
  },
} as const;
const GetOnePaymentMethod = {
  metadata: {
    allOf: [
      {
        type: "object",
        properties: {
          paymentMethod: {
            type: "string",
            $schema: "https://json-schema.org/draft/2020-12/schema#",
            description:
              'ID of the payment method (e.g. "twint" or "mastercard")',
          },
        },
        required: ["paymentMethod"],
      },
      {
        type: "object",
        properties: {
          instance: {
            type: "string",
            $schema: "https://json-schema.org/draft/2020-12/schema#",
            description: "Your Payrexx instance name",
          },
        },
        required: ["instance"],
      },
    ],
  },
  response: {
    "200": {
      type: "object",
      properties: {
        status: { type: "string", examples: ["success"] },
        data: {
          type: "object",
          properties: {
            id: { type: "string", examples: ["apple-pay"] },
            name: { type: "string", examples: ["Apple Pay"] },
            label: {
              type: "object",
              properties: { en: { type: "string", examples: ["Apple Pay"] } },
            },
            logo: {
              type: "object",
              properties: {
                en: {
                  type: "string",
                  examples: [
                    "https://media.payrexx.com/assets/cardIcons/card_apple-pay.svg",
                  ],
                },
              },
            },
            options_by_psp: {
              type: "object",
              properties: {
                "36": {
                  type: "object",
                  properties: {
                    mode: { type: "string", examples: ["test"] },
                    payment_types: {
                      type: "array",
                      items: { type: "string", examples: ["one-time"] },
                    },
                    currencies: {
                      type: "array",
                      items: { type: "string", examples: ["CHF"] },
                    },
                  },
                },
              },
            },
          },
        },
      },
      $schema: "https://json-schema.org/draft/2020-12/schema#",
    },
    "400": {
      type: "object",
      properties: {},
      $schema: "https://json-schema.org/draft/2020-12/schema#",
    },
  },
} as const;
const LoginASubscriptionCustomer = {
  body: {
    type: "object",
    required: ["userId"],
    properties: {
      userId: {
        type: "integer",
        description: "The contact id you received through webhook data.",
        default: 0,
        format: "int32",
        minimum: -2147483648,
        maximum: 2147483647,
      },
    },
    $schema: "https://json-schema.org/draft/2020-12/schema#",
  },
  metadata: {
    allOf: [
      {
        type: "object",
        properties: {
          instance: {
            type: "string",
            $schema: "https://json-schema.org/draft/2020-12/schema#",
            description: "Your Payrexx instance name",
          },
        },
        required: [],
      },
    ],
  },
  response: {
    "200": { $schema: "https://json-schema.org/draft/2020-12/schema#" },
  },
} as const;
const PreAuthorizeATokenization = {
  body: {
    type: "object",
    properties: {
      amount: {
        type: "integer",
        description: "Pre-authorized amount in cents.",
        format: "int32",
        minimum: -2147483648,
        maximum: 2147483647,
      },
      purpose: {
        type: "string",
        description: "The purpose of the pre-authorization.",
      },
      referenceId: {
        type: "string",
        description:
          "Reference ID for pre-authorization. Will be available in transaction webhook.",
      },
    },
    $schema: "https://json-schema.org/draft/2020-12/schema#",
  },
  metadata: {
    allOf: [
      {
        type: "object",
        properties: {
          id: {
            type: "integer",
            format: "int32",
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: "https://json-schema.org/draft/2020-12/schema#",
            description: "ID of the transaction to pre-authorize.",
          },
        },
        required: ["id"],
      },
      {
        type: "object",
        properties: {
          instance: {
            type: "string",
            $schema: "https://json-schema.org/draft/2020-12/schema#",
            description: "Your Payrexx instance name",
          },
        },
        required: ["instance"],
      },
    ],
  },
  response: {
    "200": {
      type: "object",
      properties: {
        status: { type: "string", examples: ["success"] },
        data: {
          type: "array",
          items: {
            type: "object",
            properties: {
              id: { type: "integer", default: 0, examples: [2] },
              uuid: { type: "string", examples: ["81d545ca"] },
              time: { type: "string", examples: ["2017-10-16 12:29:12"] },
              status: { type: "string", examples: ["reserved"] },
              lang: { type: "string", examples: ["de"] },
              psp: { type: "string", examples: ["Payrexx_Payments"] },
            },
          },
        },
      },
      $schema: "https://json-schema.org/draft/2020-12/schema#",
    },
  },
} as const;
const RefundATransaction = {
  body: {
    type: "object",
    properties: {
      amount: {
        type: "integer",
        description:
          "Custom amount to refund in cents. If not set, the whole amount will be refunded.",
        format: "int32",
        minimum: -2147483648,
        maximum: 2147483647,
      },
    },
    $schema: "https://json-schema.org/draft/2020-12/schema#",
  },
  metadata: {
    allOf: [
      {
        type: "object",
        properties: {
          id: {
            type: "integer",
            format: "int32",
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: "https://json-schema.org/draft/2020-12/schema#",
            description: "ID of the transaction to refund.",
          },
        },
        required: ["id"],
      },
      {
        type: "object",
        properties: {
          instance: {
            type: "string",
            $schema: "https://json-schema.org/draft/2020-12/schema#",
            description: "Your Payrexx instance name",
          },
        },
        required: ["instance"],
      },
    ],
  },
  response: {
    "200": {
      type: "object",
      properties: {
        status: { type: "string", examples: ["success"] },
        data: {
          type: "array",
          items: {
            type: "object",
            properties: {
              id: { type: "integer", default: 0, examples: [2] },
              uuid: { type: "string", examples: ["81d545ca"] },
              time: { type: "string", examples: ["2020-03-17 12:29:12"] },
              status: { type: "string", examples: ["refunded"] },
              lang: { type: "string", examples: ["de"] },
              psp: { type: "string", examples: ["Payrexx_Payments"] },
            },
          },
        },
      },
      $schema: "https://json-schema.org/draft/2020-12/schema#",
    },
  },
} as const;
const RemoveAPaylink = {
  metadata: {
    allOf: [
      {
        type: "object",
        properties: {
          id: {
            type: "integer",
            format: "int32",
            default: 0,
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: "https://json-schema.org/draft/2020-12/schema#",
            description: "The id of the invoice to delete",
          },
        },
        required: ["id"],
      },
      {
        type: "object",
        properties: {
          instance: {
            type: "string",
            $schema: "https://json-schema.org/draft/2020-12/schema#",
            description: "Your Payrexx instance name",
          },
        },
        required: ["instance"],
      },
    ],
  },
  response: {
    "200": {
      type: "object",
      properties: {
        status: { type: "string", examples: ["success"] },
        data: {
          type: "array",
          items: {
            type: "object",
            properties: { id: { type: "integer", default: 0, examples: [1] } },
          },
        },
      },
      $schema: "https://json-schema.org/draft/2020-12/schema#",
    },
  },
} as const;
const RemoveASubscription = {
  metadata: {
    allOf: [
      {
        type: "object",
        properties: {
          id: {
            type: "integer",
            format: "int32",
            default: 0,
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: "https://json-schema.org/draft/2020-12/schema#",
            description: "The id of the subscription to delete.",
          },
        },
        required: ["id"],
      },
      {
        type: "object",
        properties: {
          instance: {
            type: "string",
            $schema: "https://json-schema.org/draft/2020-12/schema#",
            description: "Your Payrexx instance name",
          },
        },
        required: ["instance"],
      },
    ],
  },
  response: {
    "200": {
      type: "object",
      properties: {
        status: { type: "string", examples: ["success"] },
        data: {
          type: "array",
          items: {
            type: "object",
            properties: {
              id: { type: "integer", default: 0, examples: [1] },
              status: { type: "string", examples: ["cancelled"] },
            },
          },
        },
      },
      $schema: "https://json-schema.org/draft/2020-12/schema#",
    },
  },
} as const;
const RetrieveADesign = {
  metadata: {
    allOf: [
      {
        type: "object",
        properties: {
          uuid: {
            type: "string",
            $schema: "https://json-schema.org/draft/2020-12/schema#",
            description: "UUID of design to retrieve.",
          },
        },
        required: ["uuid"],
      },
      {
        type: "object",
        properties: {
          instance: {
            type: "string",
            $schema: "https://json-schema.org/draft/2020-12/schema#",
            description: "Your Payrexx instance name",
          },
        },
        required: ["instance"],
      },
    ],
  },
  response: {
    "200": {
      type: "object",
      properties: {
        status: { type: "string", examples: ["success"] },
        data: {
          type: "array",
          items: {
            type: "object",
            properties: {
              uuid: { type: "string", examples: ["f45aff72"] },
              default: { type: "integer", default: 0, examples: [0] },
              name: { type: "string", examples: ["Example Design (via API)"] },
              fontFamily: { type: "string", examples: ["Arial"] },
              fontSize: { type: "string", examples: ["14"] },
              textColor: { type: "string", examples: ["24363A"] },
              textColorVPOS: { type: "string", examples: ["24363a"] },
              linkColor: { type: "string", examples: ["0074D6"] },
              linkHoverColor: { type: "string", examples: ["2A6496"] },
              buttonColor: { type: "string", examples: ["99CC33"] },
              buttonHoverColor: { type: "string", examples: ["19B8F2"] },
              background: { type: "string", examples: ["color"] },
              backgroundColor: { type: "string", examples: ["F9FAFA"] },
              headerBackground: { type: "string", examples: ["color"] },
              headerBackgroundColor: { type: "string", examples: ["00AFF0"] },
              emailHeaderBackgroundColor: {
                type: "string",
                examples: ["FAFAFA"],
              },
              headerImageShape: { type: "string", examples: ["square"] },
              useIndividualEmailLogo: {
                type: "integer",
                default: 0,
                examples: [0],
              },
              logoBackgroundColor: { type: "string", examples: ["FFFFFF"] },
              logoBorderColor: { type: "string", examples: ["DDDDDD"] },
              VPOSGradientColor1: { type: "string", examples: ["00AFF0"] },
              VPOSGradientColor2: { type: "string", examples: ["00AFF0"] },
              enableRoundedCorners: {
                type: "integer",
                default: 0,
                examples: [1],
              },
              headerImage: { type: "string", examples: ["payrexx-logo.png"] },
              backgroundImage: { type: "string", examples: [""] },
              headerBackgroundImage: { type: "string", examples: [""] },
              emailHeaderImage: { type: "string", examples: [""] },
              headerImageCustomLink: { type: "string", examples: ["false"] },
            },
          },
        },
      },
      $schema: "https://json-schema.org/draft/2020-12/schema#",
    },
  },
} as const;
const RetrieveAGateway = {
  metadata: {
    allOf: [
      {
        type: "object",
        properties: {
          id: {
            type: "integer",
            format: "int32",
            default: 0,
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: "https://json-schema.org/draft/2020-12/schema#",
            description: "ID of gateway payment to retrieve.",
          },
        },
        required: ["id"],
      },
      {
        type: "object",
        properties: {
          instance: {
            type: "string",
            $schema: "https://json-schema.org/draft/2020-12/schema#",
            description: "Your Payrexx instance name",
          },
        },
        required: ["instance"],
      },
    ],
  },
  response: {
    "200": {
      type: "object",
      properties: {
        status: { type: "string", examples: ["success"] },
        data: {
          type: "array",
          items: {
            type: "object",
            properties: {
              id: { type: "integer", default: 0, examples: [1] },
              status: {
                type: "string",
                examples: ["(waiting|confirmed|authorized|reserved)"],
              },
              hash: {
                type: "string",
                examples: ["db8c618c87dc91f100292f6ffd9c5044"],
              },
              referenceId: { type: "string", examples: ["975382"] },
              link: {
                type: "string",
                examples: [
                  "https://demo.payrexx.com/?payment=db8c618c87dc91f100292f6ffd9c5044",
                ],
              },
              invoices: { type: "array", items: {} },
              preAuthorization: { type: "integer", default: 0, examples: [0] },
              applicationFee: { type: "integer", default: 0, examples: [0] },
              fields: {
                type: "object",
                properties: {
                  title: {
                    type: "object",
                    properties: {
                      active: {
                        type: "boolean",
                        default: true,
                        examples: [false],
                      },
                      mandatory: {
                        type: "boolean",
                        default: true,
                        examples: [true],
                      },
                    },
                  },
                  forename: {
                    type: "object",
                    properties: {
                      active: {
                        type: "boolean",
                        default: true,
                        examples: [false],
                      },
                      mandatory: {
                        type: "boolean",
                        default: true,
                        examples: [true],
                      },
                    },
                  },
                  surname: {
                    type: "object",
                    properties: {
                      active: {
                        type: "boolean",
                        default: true,
                        examples: [false],
                      },
                      mandatory: {
                        type: "boolean",
                        default: true,
                        examples: [true],
                      },
                    },
                  },
                  company: {
                    type: "object",
                    properties: {
                      active: {
                        type: "boolean",
                        default: true,
                        examples: [false],
                      },
                      mandatory: {
                        type: "boolean",
                        default: true,
                        examples: [true],
                      },
                    },
                  },
                  street: {
                    type: "object",
                    properties: {
                      active: {
                        type: "boolean",
                        default: true,
                        examples: [false],
                      },
                      mandatory: {
                        type: "boolean",
                        default: true,
                        examples: [true],
                      },
                    },
                  },
                  postcode: {
                    type: "object",
                    properties: {
                      active: {
                        type: "boolean",
                        default: true,
                        examples: [false],
                      },
                      mandatory: {
                        type: "boolean",
                        default: true,
                        examples: [true],
                      },
                    },
                  },
                  place: {
                    type: "object",
                    properties: {
                      active: {
                        type: "boolean",
                        default: true,
                        examples: [false],
                      },
                      mandatory: {
                        type: "boolean",
                        default: true,
                        examples: [true],
                      },
                    },
                  },
                  country: {
                    type: "object",
                    properties: {
                      active: {
                        type: "boolean",
                        default: true,
                        examples: [false],
                      },
                      mandatory: {
                        type: "boolean",
                        default: true,
                        examples: [true],
                      },
                    },
                  },
                  phone: {
                    type: "object",
                    properties: {
                      active: {
                        type: "boolean",
                        default: true,
                        examples: [false],
                      },
                      mandatory: {
                        type: "boolean",
                        default: true,
                        examples: [true],
                      },
                    },
                  },
                  email: {
                    type: "object",
                    properties: {
                      active: {
                        type: "boolean",
                        default: true,
                        examples: [false],
                      },
                      mandatory: {
                        type: "boolean",
                        default: true,
                        examples: [true],
                      },
                    },
                  },
                  date_of_birth: {
                    type: "object",
                    properties: {
                      active: {
                        type: "boolean",
                        default: true,
                        examples: [false],
                      },
                      mandatory: {
                        type: "boolean",
                        default: true,
                        examples: [true],
                      },
                      names: {
                        type: "object",
                        properties: {
                          de: { type: "string", examples: [""] },
                          en: { type: "string", examples: [""] },
                          fr: { type: "string", examples: [""] },
                          it: { type: "string", examples: [""] },
                        },
                      },
                    },
                  },
                  text: {
                    type: "object",
                    properties: {
                      active: {
                        type: "boolean",
                        default: true,
                        examples: [false],
                      },
                      mandatory: {
                        type: "boolean",
                        default: true,
                        examples: [true],
                      },
                      names: {
                        type: "object",
                        properties: {
                          de: {
                            type: "string",
                            examples: ["Benutzerdefiniertes Feld (DE)"],
                          },
                          en: {
                            type: "string",
                            examples: ["Benutzerdefiniertes Feld (EN)"],
                          },
                          fr: {
                            type: "string",
                            examples: ["Benutzerdefiniertes Feld (FR)"],
                          },
                          it: {
                            type: "string",
                            examples: ["Benutzerdefiniertes Feld (IT)"],
                          },
                        },
                      },
                    },
                  },
                },
              },
              psp: { type: "array", items: {} },
              pm: { type: "array", items: {} },
              amount: { type: "integer", default: 0, examples: [8925] },
              vatRate: { type: "number", default: 0, examples: [7.7] },
              currency: { type: "string", examples: ["CHF"] },
              sku: { type: "string", examples: ["P01122000"] },
              createdAt: {
                type: "integer",
                default: 0,
                examples: [1475578052],
              },
            },
          },
        },
      },
      $schema: "https://json-schema.org/draft/2020-12/schema#",
    },
  },
} as const;
const RetrieveAPage = {
  metadata: {
    allOf: [
      {
        type: "object",
        properties: {
          id: {
            type: "integer",
            format: "int32",
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: "https://json-schema.org/draft/2020-12/schema#",
            description: "The id of the page to retrieve.",
          },
        },
        required: ["id"],
      },
      {
        type: "object",
        properties: {
          instance: {
            type: "string",
            $schema: "https://json-schema.org/draft/2020-12/schema#",
            description: "Your Payrexx instance name",
          },
        },
        required: ["instance"],
      },
    ],
  },
  response: {
    "200": {
      type: "object",
      properties: {
        status: { type: "string", examples: ["success"] },
        data: {
          type: "array",
          items: {
            type: "object",
            properties: {
              id: { type: "integer", default: 0, examples: [122] },
              uuid: { type: "string", examples: ["99c54c5a"] },
              type: { type: "string", examples: ["shop"] },
              donatedAmount: { type: "integer", default: 0, examples: [0] },
              donationGoalAmount: {},
              donationPercentage: {},
              link: { type: "string", examples: ["https://test.com"] },
              name: { type: "string", examples: [""] },
              title: { type: "string", examples: ["Test"] },
              description: { type: "string", examples: ["Test"] },
              buttonText: { type: "string", examples: [""] },
              fields: {
                type: "object",
                properties: {
                  email: {
                    type: "object",
                    properties: {
                      active: {
                        type: "boolean",
                        default: true,
                        examples: [true],
                      },
                      mandatory: {
                        type: "boolean",
                        default: true,
                        examples: [false],
                      },
                    },
                  },
                  company: {
                    type: "object",
                    properties: {
                      active: {
                        type: "boolean",
                        default: true,
                        examples: [true],
                      },
                      mandatory: {
                        type: "boolean",
                        default: true,
                        examples: [false],
                      },
                    },
                  },
                  title: {
                    type: "object",
                    properties: {
                      active: {
                        type: "boolean",
                        default: true,
                        examples: [true],
                      },
                      mandatory: {
                        type: "boolean",
                        default: true,
                        examples: [false],
                      },
                    },
                  },
                  forename: {
                    type: "object",
                    properties: {
                      active: {
                        type: "boolean",
                        default: true,
                        examples: [true],
                      },
                      mandatory: {
                        type: "boolean",
                        default: true,
                        examples: [false],
                      },
                    },
                  },
                  surname: {
                    type: "object",
                    properties: {
                      active: {
                        type: "boolean",
                        default: true,
                        examples: [true],
                      },
                      mandatory: {
                        type: "boolean",
                        default: true,
                        examples: [false],
                      },
                    },
                  },
                  street: {
                    type: "object",
                    properties: {
                      active: {
                        type: "boolean",
                        default: true,
                        examples: [true],
                      },
                      mandatory: {
                        type: "boolean",
                        default: true,
                        examples: [false],
                      },
                    },
                  },
                  postcode: {
                    type: "object",
                    properties: {
                      active: {
                        type: "boolean",
                        default: true,
                        examples: [true],
                      },
                      mandatory: {
                        type: "boolean",
                        default: true,
                        examples: [false],
                      },
                    },
                  },
                  place: {
                    type: "object",
                    properties: {
                      active: {
                        type: "boolean",
                        default: true,
                        examples: [true],
                      },
                      mandatory: {
                        type: "boolean",
                        default: true,
                        examples: [false],
                      },
                    },
                  },
                  country: {
                    type: "object",
                    properties: {
                      active: {
                        type: "boolean",
                        default: true,
                        examples: [true],
                      },
                      mandatory: {
                        type: "boolean",
                        default: true,
                        examples: [false],
                      },
                    },
                  },
                  phone: {
                    type: "object",
                    properties: {
                      active: {
                        type: "boolean",
                        default: true,
                        examples: [true],
                      },
                      mandatory: {
                        type: "boolean",
                        default: true,
                        examples: [false],
                      },
                    },
                  },
                  confirm_email: {
                    type: "object",
                    properties: {
                      active: {
                        type: "boolean",
                        default: true,
                        examples: [true],
                      },
                      mandatory: {
                        type: "boolean",
                        default: true,
                        examples: [false],
                      },
                    },
                  },
                  date_of_birth: {
                    type: "object",
                    properties: {
                      active: {
                        type: "boolean",
                        default: true,
                        examples: [true],
                      },
                      mandatory: {
                        type: "boolean",
                        default: true,
                        examples: [false],
                      },
                    },
                  },
                },
              },
              psp: {
                type: "array",
                items: { type: "integer", default: 0, examples: [44] },
              },
              pm: { type: "array", items: {} },
              subscriptionInterval: { type: "string", examples: ["P10D"] },
              subscriptionPeriod: { type: "string", examples: ["P10D"] },
              subscriptionPeriodMinAmount: {
                type: "integer",
                default: 0,
                examples: [0],
              },
              subscriptionCancellationInterval: {
                type: "string",
                examples: ["P70D"],
              },
              createdAt: {
                type: "integer",
                default: 0,
                examples: [1518566400],
              },
            },
          },
        },
      },
      $schema: "https://json-schema.org/draft/2020-12/schema#",
    },
    "404": {
      type: "object",
      properties: {
        status: { type: "string", examples: ["error"] },
        message: {
          type: "string",
          examples: ["An error occurred: No Page found with id 2"],
        },
      },
      $schema: "https://json-schema.org/draft/2020-12/schema#",
    },
  },
} as const;
const RetrieveAPaylink = {
  metadata: {
    allOf: [
      {
        type: "object",
        properties: {
          id: {
            type: "integer",
            format: "int32",
            default: 0,
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: "https://json-schema.org/draft/2020-12/schema#",
            description: "The id of the Invoice to retrieve.",
          },
        },
        required: ["id"],
      },
      {
        type: "object",
        properties: {
          instance: {
            type: "string",
            $schema: "https://json-schema.org/draft/2020-12/schema#",
            description: "Your Payrexx instance name",
          },
        },
        required: ["instance"],
      },
    ],
  },
  response: {
    "200": {
      type: "object",
      properties: {
        status: { type: "string", examples: ["success"] },
        data: {
          type: "array",
          items: {
            type: "object",
            properties: {
              id: { type: "integer", default: 0, examples: [1] },
              status: {
                type: "string",
                examples: ["(waiting|confirmed|authorized|reserved)"],
              },
              hash: {
                type: "string",
                examples: ["382c85eab7a86278e3c3b06a23af2358"],
              },
              referenceId: {
                type: "string",
                examples: ["Order number of my online shop application"],
              },
              link: {
                type: "string",
                examples: [
                  "https://demo.payrexx.com/?payment=382c85eab7a86278e3c3b06a23af2358",
                ],
              },
              invoices: { type: "array", items: {} },
              preAuthorization: { type: "integer", default: 0, examples: [0] },
              name: { type: "string", examples: ["Online-Shop payment #001"] },
              api: { type: "boolean", default: true, examples: [true] },
              fields: {
                type: "object",
                properties: {
                  title: {
                    type: "object",
                    properties: {
                      active: {
                        type: "boolean",
                        default: true,
                        examples: [true],
                      },
                      mandatory: {
                        type: "boolean",
                        default: true,
                        examples: [true],
                      },
                    },
                  },
                  forename: {
                    type: "object",
                    properties: {
                      active: {
                        type: "boolean",
                        default: true,
                        examples: [true],
                      },
                      mandatory: {
                        type: "boolean",
                        default: true,
                        examples: [true],
                      },
                    },
                  },
                  surname: {
                    type: "object",
                    properties: {
                      active: {
                        type: "boolean",
                        default: true,
                        examples: [true],
                      },
                      mandatory: {
                        type: "boolean",
                        default: true,
                        examples: [true],
                      },
                    },
                  },
                  company: {
                    type: "object",
                    properties: {
                      active: {
                        type: "boolean",
                        default: true,
                        examples: [true],
                      },
                      mandatory: {
                        type: "boolean",
                        default: true,
                        examples: [true],
                      },
                    },
                  },
                  street: {
                    type: "object",
                    properties: {
                      active: {
                        type: "boolean",
                        default: true,
                        examples: [false],
                      },
                      mandatory: {
                        type: "boolean",
                        default: true,
                        examples: [false],
                      },
                    },
                  },
                  postcode: {
                    type: "object",
                    properties: {
                      active: {
                        type: "boolean",
                        default: true,
                        examples: [false],
                      },
                      mandatory: {
                        type: "boolean",
                        default: true,
                        examples: [false],
                      },
                    },
                  },
                  place: {
                    type: "object",
                    properties: {
                      active: {
                        type: "boolean",
                        default: true,
                        examples: [false],
                      },
                      mandatory: {
                        type: "boolean",
                        default: true,
                        examples: [false],
                      },
                    },
                  },
                  country: {
                    type: "object",
                    properties: {
                      active: {
                        type: "boolean",
                        default: true,
                        examples: [true],
                      },
                      mandatory: {
                        type: "boolean",
                        default: true,
                        examples: [true],
                      },
                    },
                  },
                  phone: {
                    type: "object",
                    properties: {
                      active: {
                        type: "boolean",
                        default: true,
                        examples: [false],
                      },
                      mandatory: {
                        type: "boolean",
                        default: true,
                        examples: [false],
                      },
                    },
                  },
                  email: {
                    type: "object",
                    properties: {
                      active: {
                        type: "boolean",
                        default: true,
                        examples: [true],
                      },
                      mandatory: {
                        type: "boolean",
                        default: true,
                        examples: [true],
                      },
                    },
                  },
                  date_of_birth: {
                    type: "object",
                    properties: {
                      active: {
                        type: "boolean",
                        default: true,
                        examples: [false],
                      },
                      mandatory: {
                        type: "boolean",
                        default: true,
                        examples: [false],
                      },
                    },
                  },
                  terms: {
                    type: "object",
                    properties: {
                      active: {
                        type: "boolean",
                        default: true,
                        examples: [true],
                      },
                      mandatory: {
                        type: "boolean",
                        default: true,
                        examples: [true],
                      },
                    },
                  },
                  custom_field_1: {
                    type: "object",
                    properties: {
                      active: {
                        type: "boolean",
                        default: true,
                        examples: [true],
                      },
                      mandatory: {
                        type: "boolean",
                        default: true,
                        examples: [true],
                      },
                      names: {
                        type: "object",
                        properties: {
                          de: { type: "string", examples: ["This is a field"] },
                          en: { type: "string", examples: ["This is a field"] },
                          fr: { type: "string", examples: ["This is a field"] },
                          it: { type: "string", examples: ["This is a field"] },
                        },
                      },
                    },
                  },
                  custom_field_2: {
                    type: "object",
                    properties: {
                      active: {
                        type: "boolean",
                        default: true,
                        examples: [false],
                      },
                      mandatory: {
                        type: "boolean",
                        default: true,
                        examples: [false],
                      },
                      names: {
                        type: "object",
                        properties: {
                          de: { type: "string", examples: [""] },
                          en: { type: "string", examples: [""] },
                          fr: { type: "string", examples: [""] },
                          it: { type: "string", examples: [""] },
                        },
                      },
                    },
                  },
                  custom_field_3: {
                    type: "object",
                    properties: {
                      active: {
                        type: "boolean",
                        default: true,
                        examples: [false],
                      },
                      mandatory: {
                        type: "boolean",
                        default: true,
                        examples: [false],
                      },
                      names: {
                        type: "object",
                        properties: {
                          de: { type: "string", examples: [""] },
                          en: { type: "string", examples: [""] },
                          fr: { type: "string", examples: [""] },
                          it: { type: "string", examples: [""] },
                        },
                      },
                    },
                  },
                },
              },
              psp: { type: "integer", default: 0, examples: [1] },
              pm: { type: "array", items: {} },
              purpose: { type: "string", examples: ["Shop Order #001"] },
              amount: { type: "integer", default: 0, examples: [590] },
              vatRate: { type: "number", default: 0, examples: [7.7] },
              currency: { type: "string", examples: ["CHF"] },
              sku: { type: "string", examples: ["P01122000"] },
              subscriptionState: {
                type: "boolean",
                default: true,
                examples: [false],
              },
              subscriptionInterval: { type: "string", examples: [""] },
              subscriptionPeriod: { type: "string", examples: [""] },
              subscriptionPeriodMinAmount: {
                type: "integer",
                default: 0,
                examples: [0],
              },
              subscriptionCancellationInterval: {
                type: "string",
                examples: [""],
              },
              createdAt: {
                type: "integer",
                default: 0,
                examples: [1418392958],
              },
            },
          },
        },
      },
      $schema: "https://json-schema.org/draft/2020-12/schema#",
    },
  },
} as const;
const RetrieveAQrCode = {
  metadata: {
    allOf: [
      {
        type: "object",
        properties: {
          uuid: {
            type: "string",
            default: "36",
            $schema: "https://json-schema.org/draft/2020-12/schema#",
            description: "The UUIDv4 of the QR code",
          },
        },
        required: ["uuid"],
      },
      {
        type: "object",
        properties: {
          instance: {
            type: "string",
            $schema: "https://json-schema.org/draft/2020-12/schema#",
            description: "Your Payrexx instance name",
          },
        },
        required: ["instance"],
      },
    ],
  },
  response: {
    "200": {
      type: "object",
      properties: {
        status: { type: "string", examples: ["success"] },
        data: {
          type: "array",
          items: {
            type: "object",
            properties: {
              uuid: {
                type: "string",
                examples: ["08cc4152-993a-434b-937d-933359148ee8"],
              },
              webshopUrl: {
                type: "string",
                examples: ["https://demo.payrexx.com/demo-shop"],
              },
              png: {
                type: "string",
                examples: [
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUAAAAFACAIAAABC8jL9AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAP/ElEQVR4nO3d3XLjOg6F0WRq3v+Vey66KuNK+4cgNghs6VuXPrKkyEIfUCCh7z9//nwB8PSf7hMAsI8ABowRwIAxAhgwRgADxghgwBgBDBgjgAFjBDBgjAAGjBHAgDECGDBGAAPGCGDAGAEMGCOAAWMEMGCMAAaMEcCAMQIYMEYAA8YIYMAYAQwYI4ABYwQwYIwABowRwIAxAhgwRgADxghgwBgBDBgjgAFjBDBgjAAGjBHAgDECGDBGAAPG/nv+kN/f3xW7/fPnz8f9v9om+nnofB692v+Klb8rs/2b725ft8Xz+Xiewt8r85t+FPpBJfg/MGCMAAaMEcCAsYYxMH48DsMkY7PF7z497sZuo59HVe//AvoDeHvcv/grPt1/9KCZu/zVfoQPdeQ2zjN6btEHadWq78MipNCAMQIYMNafQv9QpV5vdhutT5Z+dwjVOHzCuFRyDkX3YZFBAXw3r+6AIXeGyvY/Cq+ug3CyzQWQQgPGCGDAGCl0m4FjrYosdKWWe/M0OOOCAZy840M3U7KuK/fmfI4tMHizf1WgrvzEN/lHgRQaMEYAA8YumEI/yqy/Xdxn9XdXvqLaJmOl7n1ybvO1M+cfFw/gwzL/QKjGqJLjrpxD0bzuiod2FyutPyKFBowRwICxC6bQi/OTj9lYo9vuwMmEDnEgzTY1KICLfpVQo7OV82ms/Uoa5aka9IU2KP26dp9e/zqQQgPGCGDAWH8KPWHstzIvdyUVr14DHNq/MLVWXZ/M/j9uv7Lxm+0n3Icb+gO4i3xebrJ3VEVgZFRfH9V1uzlSaMAYAQwYu34KfXIO8ITjqvbT1fNZ5SaZdkMAN9bZQofeOM9jL86KrlVWHbpoQsV2Hf7V5yvn6VXvfYUUGjBGAAPGBo2BVWWYM6ex/d3tseXAOdWZNcDRbSQyfcgOD1sWDQrgIqF5vMIfONMjqqvn08d9CueBV9d1rzHE/YgUGjBGAAPG/FJo1Riy+j1AmXnRo8aNi6LnM7kO7PJeq69RAbxSxzs8Tzj6MCM0hhxiu0Za1INa8pByQh3+DFJowBgBDBgblEK/kZmXq/puJvu1GFNtDE8q2vcc2JXpCTzlEcCPMu/mie6zyx3W0Hb9Qyb5h2lxmwNIoQFjBDBgbFAKPTDNi5pc26xw+DVREpl+1AMNCuBfJDVVl7XHKzvJjNkyNczMKoWi9ye9OsRH8wMyihQaMEYAA8bmptAfZeqWB96187H2WzHhWZVqbuz/1Waq+nlmm+rft/RA7w0K4GgPpIFO1l3l7/6pvs4bc92j22yfUvQ5y5yxNCk0YIwABow1pNDJNKl6TFXx3VIHemVVzwOf1rvbYu76X4PGwFHJ9/e29DSuONZJB9bEdo1LQ2PsOWuDSaEBYwQwYGxWCn2y7ifPfA6k611jswnj/+ouRdXvgioy6N1Ih2uAmWPJ5zmvbJO5gw8syt8eQ6os3lddNecipNCAMQIYMNY8Bi5KUeZnPl/p+dgfM+rkPOqx88PxaNZDrOhNkxmrVPdwlgfAgbW10eN+rIGrarOPVOuZNzZrr8P/ixQaMEYAA8ZmpdA/FsdjFUMmeYYmfEVIRX1bcg2T57ny+0o6+yT/2IFzpJsDWHgVjtVvW3Z+DZL3D1ePsYuOVYQUGjBGAAPGPOrAqjnSFWOYp/t8czIua5Iz1yqz/rbifEI7/2X4yGjoQ6xFkvckzR/nfBS6DpknYRt3s+o9T5LzyUTjzEgmhQaMEcCAsVk9sVS7GlivKyW5Dovj9ur1t6rvqlL30Hneui/0ou0f5mTNObo29eOB3ny3YmwZdXLe+JA14UOQQgPGCGDAmF8KLenxW7QWd3vjjTqkqtaa+dvlafyE4cD5w2U098RSNXlX/fAbNeFjpcjMuXn1Ot5W0aN7ZU5B44NSUmjAGAEMGPMbAz9SZXon68Yn1+tWZ8LVvZRV16p6LP2z29vVgTONiKr7D0d7QW3s5+lmqrG3ao5xsv5cPS+9tC/axy/uHVeIFBowRgADxmatB26Zv7qxE9Mqy1Oq9cyZ+dhdc9e31yHPuQG8H2Jl+gaf7EG9dyDhflS9o1R/e7T3VXSfmeN6IYUGjBHAgLHrrAd2X/dbOsd44xza958sI1Vcq4FZ99AxcEXvokyt79XnB2qV1eT9tF4xahwXmv9MHRjAJgIYMDYrhZbU3DZqxdXjqJPzn1U+Pl8QTgsdO997wg/xXn8Ay+cAH7Z9c78SHYsKA+mk7XdZRbePXquo3huSFBowRgADxvpT6G1D6nuSWnTjvOvt+cCHj5vZZ/RtMttvn7nFeuCV+urK59HDZdavJufQts+7VtXGo4fYOO72M5HM+vBo5M95pkAKDRgjgAFjs9YDv1IxtKjonzwns/qrZa744Zp5xYFUKxwPMH6IlRnPVIz9Ku68zDuWVD3DiiJquw68snF1f6w564pJoQFjBDBgzCOFDs1bPnAO02TW2UbT7+pe0KU7T9bbB94DswI40+Mqf6ADx30l0/+p8a7q6gVd7dh9mEcKDRgjgAFjs3piRXsIL+724wbuvabGnoPpwNKo19qsMfBTmff0FJ3GNCcbu8l7ZW0f9CvX5yx6rWbeAKTQgDECGDD2fT4xGDjmuTPV8r3q5wgTSjsD0+zm9cBdP8Cjoodbqht6Ql8reZtu1TXPjGmvgRQaMEYAA8YMykgVDvQrVpnWE2t7m+Q1l/QMv565Abxd421cvxrazyuN+z/5oCi0Hri6jv1ItY76DFJowBgBDBibNRc6tNnG9MmTQ6aK88+cQFfWp+q5Hd1n9f3zNL2/RR34lwkF+lfkvY4z59BV54yefGZ+8pv9SNYeXw8pNGCMAAaM9afQFpLjycww6WQPqtAUX+E1Ue1nTnXnmEHvRjqwH3kv4pUvRu9U1fzerrtZNde9a41x9Cu8HxjAJgIYMMZ64N+qyxJdU0FxwB3rwNUk494Ja5hPLpR/lJyr3FWnvdJ67DdIoQFjBDBg7PoptGq9q2p4M61uWX0+MzPPdcPPvz+At5uqvdLYwP3psR5d4LjyMv7G3ObQd1fq6q8MWRDyBik0YIwABoz1p9DR7K5ifWnpdw+/H2jaGLuCqv9W9Lsfd0sdWKOrBnjy9zvWszr5R1U3Q8+8Wjm0/cynWaTQgDECGDB2zRT6Dqp7TanWAJ/sa11xPjMz5x+zArh0ve7iseS1xIr1scLrIxnjqd7fGz3c4f1v9yqvQwoNGCOAAWOzUuiT85blfYM30rnQV7oGbxs/SvXY+GSfsBU/x71jHfhu/X7bX5BdVI8N7VNYu25Zk9y4PvwXUmjAGAEMGOtPoSvGM46Ztuo6jJpbPuSHkJ/GkL/ra0IAR2XGM9u138znK2POovcARWvaof0ka6HbY1fV9V88h+FIoQFjBDBgzC+FHjUHePhA/enflaxXr2Sq8jpw0bWKPncYmGn3B7BqgsT2/NUhv0rXe3dKr4NqvC08jR/J+2TI/UMKDRgjgAFj/Sn0tB5O7fNpf6noR73yeXQ/KhX3Q3QMv/L5EP0B/FFmLe5hE8ZFofrqkPFeaJ72gUUmJ3uGJZFCA8YIYMCYQQr9xrQybEUL6Ggtd9SY7eTJCI+1/TvecT1whcx1DH03uS5UNeaU9xJbmW9cMbZcOcmNH7e6j1ojUmjAGAEMGDNIoYvm7qoOl0nPVDXY6Jit+rWaqjnGqhLRtLkGQv0BLH+3TfRuODCekax9ra5nJlnXlrd33o4UGjBGAAPG+lNo1fgnlNXMKQP8q3G6qGqMnTmWZOcrX0neA09TdOrAT5iuiZWftuOc8FcfCs9fXgP3QgoNGCOAAWNzU2jV0GLC+t6T7woaON3vr43525N7aw25vA0BrHqvzMmx8aONNauhbaIndnLcLhxnbq+5rTiHqDnPIEihAWMEMGCsIYWetoj3zW5V4yt5qTC5Hri6Rqraj+o5gqqX9cfj3r0OfKV63fZc3Ip1xcn9q4R6XwvXQl8YKTRgjAAGjM1KoR1l1r5WDxlapulGnwVsrOldPNz2NqEhSS/jOvBXQd2yYoL7NMK7sOuGlvS+flR9H9YhhQaMEcCAsaFj4MWxx8neVxUyfaoW/9P2Pqv3Uz0dYOB0gwrNAVw9eCjqgyV5l0+yV1N1r6nMfqLjTMmxMnOki+aWH0AKDRgjgAFj372lrSFL4SazKE01qngNTfS7jUE09CHWV/3Fcpk/nCEfDz9Kjr3l179ifkFFT2ktUmjAGAEMGJu7Hjgz93VOhnMN0+ZUb2wW2n57vfQd1wNn5rVqT2BjG+H4ufRVPZm6dPSgRY2pqmvFpkihAWMEMGCsP4VuV1E/PDw3+ORxP46HF1N01Xrg6u8O17weWLWrxidbmSH0j8N3mMuYUDLPec6kiwqk0IAxAhgw1jwX+tGBdK46daxe4od/yadwZn67O9aBJ5AH2MYPeXJSfmafFXX79rkAG4acDyk0YIwABow1jIGHpECPTi67UxmSwt3W0+vPGPj/JOuBqxsGnHzwltl+yAPC0MSPN9tk9h/az8q59T4GJoUGjBHAgLG5KfT2mswiK0Od3uHQv+fgeFzVnOfM9d9ei84Y+Dl5H6zoBhv9n6P7nPZQ6tja5mQvq67JOUOQQgPGCGDAmEcKXapouVkyo97YoIhwjfHJdHRmxitnvB4406fqwjJrj7fXNh+Yj616v9H29Sl6z1YSKTRgjAAGjM3tCx2VqQCFvhjdJmn7EEVTUDO11uq+Vpm/cVrbo0UXfIgVrStG+xIX6ao3hsa9mYbmRWNa+Xe9kEIDxghgwNgFU+hFXa+3ybzzaZqn4+GNPs/yay68mMN/l/4A3v7xqt8ZGy2KbsxtHttgbeW9R0Pu7O0/M9O3bA5SaMAYAQwY60+hf6iWqiVTu+i7f1TH6tpnaCy6WB+WKHpnUmktmvXA5xzrHVUxDh8yFpX0LUse6+ZIoQFjBDBg7L4pdCgTS66JzcwZPpmmfjyZja90tbm9iesHcPQG2u7DPKSf07E52wdI+jAffnfUYaTQgDECGDB2/RT6ZJ0wqqImKalUCdcDV68BfqUi1Z+TOf+4fgCrbL/z9tWHRmtct9cDJ9+TJLEyX/2VjXnsh5FCA8YIYMAYKXTWylg0k25Vv29Jsv+NGvWx90gVPQQZMh4eFMAV/aKT62yj49gJNeHMOmS5ov5kGRV1/sZ1wqTQgDECGDDWn0JPqLtG30tU8ZYN1XXItLOu/nz7xL5EZbzFY0X97Ir1wGJF49Vq8vcYfyUCoGKcf9I1el+9QgoNGCOAAWPfRtkCgF/4PzBgjAAGjBHAgDECGDBGAAPGCGDAGAEMGCOAAWMEMGCMAAaMEcCAMQIYMEYAA8YIYMAYAQwYI4ABYwQwYIwABowRwIAxAhgwRgADxghgwBgBDBgjgAFjBDBgjAAGjBHAgDECGDBGAAPGCGDAGAEMGCOAAWMEMGCMAAaMEcCAMQIYMEYAA8b+BxmKS9VLlC0xAAAAAElFTkSuQmCC",
                ],
              },
              svg: {
                type: "string",
                examples: [
                  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHdpZHRoPSIzMjBweCIgaGVpZ2h0PSIzMjBweCIgdmlld0JveD0iMCAwIDMyMCAzMjAiPjxkZWZzPjxyZWN0IGlkPSJibG9jayIgd2lkdGg9IjQiIGhlaWdodD0iNCIgZmlsbD0iIzAwMDAwMCIgZmlsbC1vcGFjaXR5PSIxIi8+PC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIzMjAiIGhlaWdodD0iMzIwIiBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9IjEiLz48dXNlIHg9IjM4IiB5PSIzOCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI0MiIgeT0iMzgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNDYiIHk9IjM4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjUwIiB5PSIzOCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI1NCIgeT0iMzgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNTgiIHk9IjM4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjYyIiB5PSIzOCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI3MCIgeT0iMzgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNzQiIHk9IjM4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjgyIiB5PSIzOCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI5MCIgeT0iMzgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iOTgiIHk9IjM4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEwMiIgeT0iMzgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTA2IiB5PSIzOCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMTAiIHk9IjM4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEyMiIgeT0iMzgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTQyIiB5PSIzOCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNDYiIHk9IjM4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE1OCIgeT0iMzgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTYyIiB5PSIzOCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNzgiIHk9IjM4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE4NiIgeT0iMzgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTk0IiB5PSIzOCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMDYiIHk9IjM4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIxMCIgeT0iMzgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjE0IiB5PSIzOCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMTgiIHk9IjM4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIyNiIgeT0iMzgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjM0IiB5PSIzOCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNDIiIHk9IjM4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI0NiIgeT0iMzgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjU0IiB5PSIzOCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNTgiIHk9IjM4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI2MiIgeT0iMzgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjY2IiB5PSIzOCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNzAiIHk9IjM4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI3NCIgeT0iMzgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjc4IiB5PSIzOCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIzOCIgeT0iNDIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNjIiIHk9IjQyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjcwIiB5PSI0MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI5MCIgeT0iNDIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTEwIiB5PSI0MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMjYiIHk9IjQyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEzNCIgeT0iNDIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTM4IiB5PSI0MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNDYiIHk9IjQyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE1NCIgeT0iNDIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTU4IiB5PSI0MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNjIiIHk9IjQyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE2NiIgeT0iNDIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTgyIiB5PSI0MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxODYiIHk9IjQyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE5MCIgeT0iNDIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTk4IiB5PSI0MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMDIiIHk9IjQyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIwNiIgeT0iNDIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjIyIiB5PSI0MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMjYiIHk9IjQyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIzMCIgeT0iNDIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjM0IiB5PSI0MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNDIiIHk9IjQyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI0NiIgeT0iNDIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjU0IiB5PSI0MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNzgiIHk9IjQyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjM4IiB5PSI0NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI0NiIgeT0iNDYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNTAiIHk9IjQ2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjU0IiB5PSI0NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI2MiIgeT0iNDYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNzAiIHk9IjQ2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9Ijc0IiB5PSI0NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI4NiIgeT0iNDYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iOTAiIHk9IjQ2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9Ijk0IiB5PSI0NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMDYiIHk9IjQ2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjExMCIgeT0iNDYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTE0IiB5PSI0NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNDYiIHk9IjQ2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE1NCIgeT0iNDYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTU4IiB5PSI0NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNjIiIHk9IjQ2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE2NiIgeT0iNDYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTcwIiB5PSI0NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNzgiIHk9IjQ2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE4MiIgeT0iNDYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTg2IiB5PSI0NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxOTAiIHk9IjQ2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE5NCIgeT0iNDYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTk4IiB5PSI0NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMDYiIHk9IjQ2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIzMCIgeT0iNDYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjM4IiB5PSI0NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNDIiIHk9IjQ2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI0NiIgeT0iNDYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjU0IiB5PSI0NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNjIiIHk9IjQ2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI2NiIgeT0iNDYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjcwIiB5PSI0NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNzgiIHk9IjQ2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjM4IiB5PSI1MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI0NiIgeT0iNTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNTAiIHk9IjUwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjU0IiB5PSI1MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI2MiIgeT0iNTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iODYiIHk9IjUwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9Ijk0IiB5PSI1MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMTAiIHk9IjUwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjExNCIgeT0iNTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTI2IiB5PSI1MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMzAiIHk9IjUwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEzNCIgeT0iNTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTQ2IiB5PSI1MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNTgiIHk9IjUwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE3MCIgeT0iNTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTc0IiB5PSI1MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNzgiIHk9IjUwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE4MiIgeT0iNTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTkwIiB5PSI1MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMDIiIHk9IjUwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIxMCIgeT0iNTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjE4IiB5PSI1MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMjIiIHk9IjUwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIyNiIgeT0iNTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjM4IiB5PSI1MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNDYiIHk9IjUwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI1NCIgeT0iNTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjYyIiB5PSI1MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNjYiIHk9IjUwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI3MCIgeT0iNTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjc4IiB5PSI1MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIzOCIgeT0iNTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNDYiIHk9IjU0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjUwIiB5PSI1NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI1NCIgeT0iNTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNjIiIHk9IjU0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9Ijc0IiB5PSI1NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI4NiIgeT0iNTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iOTQiIHk9IjU0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEwMiIgeT0iNTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTA2IiB5PSI1NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMjIiIHk9IjU0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEyNiIgeT0iNTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTM4IiB5PSI1NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNDIiIHk9IjU0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE0NiIgeT0iNTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTUwIiB5PSI1NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNTQiIHk9IjU0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE1OCIgeT0iNTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTYyIiB5PSI1NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNjYiIHk9IjU0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE4MiIgeT0iNTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTk0IiB5PSI1NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMDIiIHk9IjU0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIwNiIgeT0iNTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjE0IiB5PSI1NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMzgiIHk9IjU0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI0MiIgeT0iNTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjU0IiB5PSI1NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNjIiIHk9IjU0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI2NiIgeT0iNTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjcwIiB5PSI1NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNzgiIHk9IjU0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjM4IiB5PSI1OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI2MiIgeT0iNTgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNzAiIHk9IjU4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9Ijc4IiB5PSI1OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI4MiIgeT0iNTgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTA2IiB5PSI1OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMTgiIHk9IjU4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEyMiIgeT0iNTgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTI2IiB5PSI1OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMzAiIHk9IjU4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEzNCIgeT0iNTgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTM4IiB5PSI1OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNTAiIHk9IjU4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE2NiIgeT0iNTgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTc4IiB5PSI1OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMDIiIHk9IjU4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIwNiIgeT0iNTgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjEwIiB5PSI1OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMjYiIHk9IjU4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIzOCIgeT0iNTgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjU0IiB5PSI1OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNzgiIHk9IjU4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjM4IiB5PSI2MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI0MiIgeT0iNjIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNDYiIHk9IjYyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjUwIiB5PSI2MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI1NCIgeT0iNjIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNTgiIHk9IjYyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjYyIiB5PSI2MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI3MCIgeT0iNjIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNzgiIHk9IjYyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9Ijg2IiB5PSI2MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI5NCIgeT0iNjIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTAyIiB5PSI2MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMTAiIHk9IjYyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjExOCIgeT0iNjIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTI2IiB5PSI2MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMzQiIHk9IjYyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE0MiIgeT0iNjIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTUwIiB5PSI2MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNTgiIHk9IjYyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE2NiIgeT0iNjIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTc0IiB5PSI2MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxODIiIHk9IjYyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE5MCIgeT0iNjIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTk4IiB5PSI2MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMDYiIHk9IjYyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIxNCIgeT0iNjIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjIyIiB5PSI2MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMzAiIHk9IjYyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIzOCIgeT0iNjIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjQ2IiB5PSI2MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNTQiIHk9IjYyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI1OCIgeT0iNjIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjYyIiB5PSI2MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNjYiIHk9IjYyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI3MCIgeT0iNjIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjc0IiB5PSI2MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNzgiIHk9IjYyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjcwIiB5PSI2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI3NCIgeT0iNjYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iODYiIHk9IjY2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEwMiIgeT0iNjYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTA2IiB5PSI2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMTQiIHk9IjY2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjExOCIgeT0iNjYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTI2IiB5PSI2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMzQiIHk9IjY2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE0NiIgeT0iNjYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTUwIiB5PSI2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNjYiIHk9IjY2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE3MCIgeT0iNjYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTc0IiB5PSI2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNzgiIHk9IjY2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE4NiIgeT0iNjYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTk4IiB5PSI2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMDYiIHk9IjY2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIxMCIgeT0iNjYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjQyIiB5PSI2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI0NiIgeT0iNzAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNTAiIHk9IjcwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjU0IiB5PSI3MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI2MiIgeT0iNzAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNzAiIHk9IjcwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjkwIiB5PSI3MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI5NCIgeT0iNzAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iOTgiIHk9IjcwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjExMCIgeT0iNzAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTIyIiB5PSI3MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMzAiIHk9IjcwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE0MiIgeT0iNzAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTUwIiB5PSI3MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNTQiIHk9IjcwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE1OCIgeT0iNzAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTYyIiB5PSI3MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNjYiIHk9IjcwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE3MCIgeT0iNzAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTc4IiB5PSI3MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxOTAiIHk9IjcwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE5OCIgeT0iNzAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjAyIiB5PSI3MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMDYiIHk9IjcwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIxNCIgeT0iNzAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjE4IiB5PSI3MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMjIiIHk9IjcwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIyNiIgeT0iNzAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjMwIiB5PSI3MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMzQiIHk9IjcwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIzOCIgeT0iNzAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjUwIiB5PSI3MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNTQiIHk9IjcwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI1OCIgeT0iNzAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjcwIiB5PSI3MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNzQiIHk9IjcwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI3OCIgeT0iNzAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNTAiIHk9Ijc0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjU4IiB5PSI3NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI2NiIgeT0iNzQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNzAiIHk9Ijc0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9Ijc4IiB5PSI3NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI4NiIgeT0iNzQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iOTAiIHk9Ijc0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEwMiIgeT0iNzQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTA2IiB5PSI3NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMTQiIHk9Ijc0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEzMCIgeT0iNzQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTM0IiB5PSI3NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMzgiIHk9Ijc0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE0MiIgeT0iNzQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTQ2IiB5PSI3NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNTAiIHk9Ijc0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE1NCIgeT0iNzQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTU4IiB5PSI3NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNjIiIHk9Ijc0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE2NiIgeT0iNzQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTk0IiB5PSI3NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMDYiIHk9Ijc0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIxMCIgeT0iNzQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjE0IiB5PSI3NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMjIiIHk9Ijc0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI0MiIgeT0iNzQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjQ2IiB5PSI3NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNTAiIHk9Ijc0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI1NCIgeT0iNzQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjU4IiB5PSI3NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNjIiIHk9Ijc0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI3NCIgeT0iNzQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjc4IiB5PSI3NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI1MCIgeT0iNzgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNTQiIHk9Ijc4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjYyIiB5PSI3OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI3NCIgeT0iNzgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNzgiIHk9Ijc4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjgyIiB5PSI3OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI5MCIgeT0iNzgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iOTQiIHk9Ijc4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEwMiIgeT0iNzgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTA2IiB5PSI3OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMTQiIHk9Ijc4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjExOCIgeT0iNzgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTMwIiB5PSI3OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMzgiIHk9Ijc4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE0NiIgeT0iNzgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTUwIiB5PSI3OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNTQiIHk9Ijc4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE2MiIgeT0iNzgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTY2IiB5PSI3OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNzQiIHk9Ijc4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE4MiIgeT0iNzgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTg2IiB5PSI3OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxOTQiIHk9Ijc4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIwMiIgeT0iNzgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjA2IiB5PSI3OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMjIiIHk9Ijc4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIyNiIgeT0iNzgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjMwIiB5PSI3OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMzQiIHk9Ijc4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIzOCIgeT0iNzgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjQyIiB5PSI3OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNDYiIHk9Ijc4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI1NCIgeT0iNzgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjU4IiB5PSI3OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNzAiIHk9Ijc4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjQ2IiB5PSI4MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI1NCIgeT0iODIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iOTAiIHk9IjgyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9Ijk0IiB5PSI4MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMDIiIHk9IjgyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEwNiIgeT0iODIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTEwIiB5PSI4MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMzAiIHk9IjgyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE0MiIgeT0iODIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTQ2IiB5PSI4MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNjYiIHk9IjgyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE3NCIgeT0iODIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTkwIiB5PSI4MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxOTQiIHk9IjgyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIwNiIgeT0iODIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjEwIiB5PSI4MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMTQiIHk9IjgyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIxOCIgeT0iODIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjI2IiB5PSI4MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMzAiIHk9IjgyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI1MCIgeT0iODIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjU0IiB5PSI4MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNTgiIHk9IjgyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI2NiIgeT0iODIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjcwIiB5PSI4MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI2MiIgeT0iODYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNzAiIHk9Ijg2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9Ijc0IiB5PSI4NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI4MiIgeT0iODYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iOTAiIHk9Ijg2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9Ijk0IiB5PSI4NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMDIiIHk9Ijg2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEwNiIgeT0iODYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTE0IiB5PSI4NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMjYiIHk9Ijg2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEzMCIgeT0iODYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTM4IiB5PSI4NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNDIiIHk9Ijg2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE1NCIgeT0iODYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTU4IiB5PSI4NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxODYiIHk9Ijg2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE5MCIgeT0iODYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTk0IiB5PSI4NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxOTgiIHk9Ijg2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIxMCIgeT0iODYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjE4IiB5PSI4NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMjIiIHk9Ijg2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIzMCIgeT0iODYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjM0IiB5PSI4NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMzgiIHk9Ijg2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI0MiIgeT0iODYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjUwIiB5PSI4NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNTgiIHk9Ijg2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI3NCIgeT0iODYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjc4IiB5PSI4NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIzOCIgeT0iOTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNDIiIHk9IjkwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjUwIiB5PSI5MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI1NCIgeT0iOTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNzQiIHk9IjkwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9Ijc4IiB5PSI5MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI5MCIgeT0iOTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iOTQiIHk9IjkwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9Ijk4IiB5PSI5MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMDIiIHk9IjkwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEyNiIgeT0iOTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTMwIiB5PSI5MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMzgiIHk9IjkwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE1MCIgeT0iOTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTU0IiB5PSI5MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNTgiIHk9IjkwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE2MiIgeT0iOTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTY2IiB5PSI5MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNzAiIHk9IjkwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE3NCIgeT0iOTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTc4IiB5PSI5MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxOTAiIHk9IjkwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE5NCIgeT0iOTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTk4IiB5PSI5MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMDIiIHk9IjkwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIxMCIgeT0iOTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjE0IiB5PSI5MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMjIiIHk9IjkwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIzOCIgeT0iOTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjQyIiB5PSI5MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNDYiIHk9IjkwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI1MCIgeT0iOTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjU0IiB5PSI5MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNjIiIHk9IjkwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI3OCIgeT0iOTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNDYiIHk9Ijk0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjUwIiB5PSI5NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI1OCIgeT0iOTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNjIiIHk9Ijk0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjY2IiB5PSI5NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI3NCIgeT0iOTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNzgiIHk9Ijk0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjgyIiB5PSI5NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI4NiIgeT0iOTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iOTQiIHk9Ijk0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9Ijk4IiB5PSI5NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMTAiIHk9Ijk0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjExNCIgeT0iOTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTQyIiB5PSI5NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNjIiIHk9Ijk0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE2NiIgeT0iOTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTgyIiB5PSI5NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxODYiIHk9Ijk0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE5MCIgeT0iOTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTk4IiB5PSI5NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMDIiIHk9Ijk0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIyMiIgeT0iOTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjI2IiB5PSI5NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMzAiIHk9Ijk0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI0NiIgeT0iOTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjU0IiB5PSI5NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNTgiIHk9Ijk0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI2NiIgeT0iOTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjcwIiB5PSI5NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNzQiIHk9Ijk0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI3OCIgeT0iOTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNDIiIHk9Ijk4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjU4IiB5PSI5OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI2NiIgeT0iOTgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNzAiIHk9Ijk4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9Ijc0IiB5PSI5OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI3OCIgeT0iOTgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iODYiIHk9Ijk4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjExMCIgeT0iOTgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTI2IiB5PSI5OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNDYiIHk9Ijk4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE1MCIgeT0iOTgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTU4IiB5PSI5OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNjYiIHk9Ijk4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE3NCIgeT0iOTgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTg2IiB5PSI5OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMDIiIHk9Ijk4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIwNiIgeT0iOTgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjE4IiB5PSI5OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMzAiIHk9Ijk4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI1NCIgeT0iOTgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjY2IiB5PSI5OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI1MCIgeT0iMTAyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjU4IiB5PSIxMDIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNjIiIHk9IjEwMiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI3MCIgeT0iMTAyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9Ijc0IiB5PSIxMDIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iODYiIHk9IjEwMiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI5MCIgeT0iMTAyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9Ijk0IiB5PSIxMDIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iOTgiIHk9IjEwMiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMDIiIHk9IjEwMiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMTgiIHk9IjEwMiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMjYiIHk9IjEwMiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMzgiIHk9IjEwMiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNDYiIHk9IjEwMiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNTAiIHk9IjEwMiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNTQiIHk9IjEwMiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNTgiIHk9IjEwMiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNjYiIHk9IjEwMiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNzAiIHk9IjEwMiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNzQiIHk9IjEwMiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxODYiIHk9IjEwMiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxOTQiIHk9IjEwMiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMDIiIHk9IjEwMiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMTAiIHk9IjEwMiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMjIiIHk9IjEwMiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMzQiIHk9IjEwMiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMzgiIHk9IjEwMiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNDIiIHk9IjEwMiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNTAiIHk9IjEwMiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNzAiIHk9IjEwMiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI0MiIgeT0iMTA2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjQ2IiB5PSIxMDYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNTAiIHk9IjEwNiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI1NCIgeT0iMTA2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjU4IiB5PSIxMDYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNjYiIHk9IjEwNiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI3OCIgeT0iMTA2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjkwIiB5PSIxMDYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iOTQiIHk9IjEwNiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI5OCIgeT0iMTA2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEwMiIgeT0iMTA2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEwNiIgeT0iMTA2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjExNCIgeT0iMTA2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjExOCIgeT0iMTA2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEyMiIgeT0iMTA2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEyNiIgeT0iMTA2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEzOCIgeT0iMTA2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE0MiIgeT0iMTA2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE0NiIgeT0iMTA2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE1NCIgeT0iMTA2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE3OCIgeT0iMTA2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE5NCIgeT0iMTA2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE5OCIgeT0iMTA2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIwNiIgeT0iMTA2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIxNCIgeT0iMTA2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIxOCIgeT0iMTA2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIyMiIgeT0iMTA2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIyNiIgeT0iMTA2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI1OCIgeT0iMTA2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI2MiIgeT0iMTA2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjM4IiB5PSIxMTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNDIiIHk9IjExMCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI0NiIgeT0iMTEwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjUwIiB5PSIxMTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNTQiIHk9IjExMCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI2MiIgeT0iMTEwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjcwIiB5PSIxMTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iOTAiIHk9IjExMCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI5NCIgeT0iMTEwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9Ijk4IiB5PSIxMTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTA2IiB5PSIxMTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTIyIiB5PSIxMTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTQyIiB5PSIxMTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTUwIiB5PSIxMTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTU4IiB5PSIxMTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTc0IiB5PSIxMTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTc4IiB5PSIxMTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTgyIiB5PSIxMTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjA2IiB5PSIxMTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjEwIiB5PSIxMTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjMwIiB5PSIxMTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjM0IiB5PSIxMTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjM4IiB5PSIxMTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjQ2IiB5PSIxMTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjU0IiB5PSIxMTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjU4IiB5PSIxMTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjY2IiB5PSIxMTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjcwIiB5PSIxMTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjc0IiB5PSIxMTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjc4IiB5PSIxMTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNDIiIHk9IjExNCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI0NiIgeT0iMTE0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjU0IiB5PSIxMTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNTgiIHk9IjExNCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI2NiIgeT0iMTE0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9Ijc0IiB5PSIxMTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iODIiIHk9IjExNCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI5NCIgeT0iMTE0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9Ijk4IiB5PSIxMTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTAyIiB5PSIxMTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTE4IiB5PSIxMTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTMwIiB5PSIxMTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTM0IiB5PSIxMTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTQ2IiB5PSIxMTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTUwIiB5PSIxMTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTU0IiB5PSIxMTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTYyIiB5PSIxMTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTY2IiB5PSIxMTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTc4IiB5PSIxMTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTgyIiB5PSIxMTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTg2IiB5PSIxMTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTk0IiB5PSIxMTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjAyIiB5PSIxMTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjA2IiB5PSIxMTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjEwIiB5PSIxMTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjE4IiB5PSIxMTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjI2IiB5PSIxMTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjMwIiB5PSIxMTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjM0IiB5PSIxMTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjU0IiB5PSIxMTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjU4IiB5PSIxMTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjYyIiB5PSIxMTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjc0IiB5PSIxMTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNjIiIHk9IjExOCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI2NiIgeT0iMTE4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjgyIiB5PSIxMTgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iODYiIHk9IjExOCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI5OCIgeT0iMTE4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEyMiIgeT0iMTE4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEyNiIgeT0iMTE4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEzNCIgeT0iMTE4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEzOCIgeT0iMTE4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE0MiIgeT0iMTE4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE1OCIgeT0iMTE4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE2MiIgeT0iMTE4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE2NiIgeT0iMTE4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE4MiIgeT0iMTE4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE5MCIgeT0iMTE4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE5OCIgeT0iMTE4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIxMCIgeT0iMTE4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIyMiIgeT0iMTE4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIyNiIgeT0iMTE4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIzMCIgeT0iMTE4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIzOCIgeT0iMTE4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI0MiIgeT0iMTE4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI1MCIgeT0iMTE4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI1OCIgeT0iMTE4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI2MiIgeT0iMTE4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI3OCIgeT0iMTE4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjQyIiB5PSIxMjIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNTAiIHk9IjEyMiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI1OCIgeT0iMTIyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjcwIiB5PSIxMjIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNzQiIHk9IjEyMiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI3OCIgeT0iMTIyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9Ijk0IiB5PSIxMjIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTAyIiB5PSIxMjIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTA2IiB5PSIxMjIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTEwIiB5PSIxMjIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTE0IiB5PSIxMjIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTE4IiB5PSIxMjIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTIyIiB5PSIxMjIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTI2IiB5PSIxMjIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTYyIiB5PSIxMjIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTY2IiB5PSIxMjIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTcwIiB5PSIxMjIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTc4IiB5PSIxMjIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTg2IiB5PSIxMjIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTkwIiB5PSIxMjIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTk0IiB5PSIxMjIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTk4IiB5PSIxMjIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjAyIiB5PSIxMjIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjE0IiB5PSIxMjIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjU0IiB5PSIxMjIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjU4IiB5PSIxMjIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjYyIiB5PSIxMjIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjY2IiB5PSIxMjIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjc0IiB5PSIxMjIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjc4IiB5PSIxMjIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMzgiIHk9IjEyNiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI0MiIgeT0iMTI2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjU4IiB5PSIxMjYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNjIiIHk9IjEyNiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI3OCIgeT0iMTI2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEwNiIgeT0iMTI2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjExMCIgeT0iMTI2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjExNCIgeT0iMTI2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEyMiIgeT0iMTI2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEyNiIgeT0iMTI2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEzMCIgeT0iMTI2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEzOCIgeT0iMTI2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE0NiIgeT0iMTI2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE1MCIgeT0iMTI2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE1NCIgeT0iMTI2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE1OCIgeT0iMTI2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE2MiIgeT0iMTI2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE2NiIgeT0iMTI2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE3NCIgeT0iMTI2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIwNiIgeT0iMTI2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIxMCIgeT0iMTI2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIyMiIgeT0iMTI2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIyNiIgeT0iMTI2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIzMCIgeT0iMTI2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIzOCIgeT0iMTI2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI0NiIgeT0iMTI2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI1MCIgeT0iMTI2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI1NCIgeT0iMTI2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI1OCIgeT0iMTI2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI3MCIgeT0iMTI2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI3OCIgeT0iMTI2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjM4IiB5PSIxMzAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNDYiIHk9IjEzMCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI1NCIgeT0iMTMwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjcwIiB5PSIxMzAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNzQiIHk9IjEzMCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI3OCIgeT0iMTMwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjgyIiB5PSIxMzAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iOTAiIHk9IjEzMCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI5OCIgeT0iMTMwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEwMiIgeT0iMTMwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjExNCIgeT0iMTMwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjExOCIgeT0iMTMwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEzNCIgeT0iMTMwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE1MCIgeT0iMTMwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE1NCIgeT0iMTMwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE2MiIgeT0iMTMwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE2NiIgeT0iMTMwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE3NCIgeT0iMTMwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE3OCIgeT0iMTMwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE5MCIgeT0iMTMwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE5NCIgeT0iMTMwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIwMiIgeT0iMTMwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIwNiIgeT0iMTMwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIxNCIgeT0iMTMwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIxOCIgeT0iMTMwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIzMCIgeT0iMTMwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIzNCIgeT0iMTMwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI1MCIgeT0iMTMwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI1NCIgeT0iMTMwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI2NiIgeT0iMTMwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI3MCIgeT0iMTMwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjYyIiB5PSIxMzQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNjYiIHk9IjEzNCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI3MCIgeT0iMTM0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9Ijc4IiB5PSIxMzQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iODYiIHk9IjEzNCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMDIiIHk9IjEzNCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMDYiIHk9IjEzNCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMTQiIHk9IjEzNCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMzAiIHk9IjEzNCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMzgiIHk9IjEzNCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNDIiIHk9IjEzNCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNDYiIHk9IjEzNCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNTAiIHk9IjEzNCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNTQiIHk9IjEzNCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNzAiIHk9IjEzNCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNzQiIHk9IjEzNCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNzgiIHk9IjEzNCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxODIiIHk9IjEzNCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxOTAiIHk9IjEzNCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMTAiIHk9IjEzNCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMTQiIHk9IjEzNCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMjIiIHk9IjEzNCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMjYiIHk9IjEzNCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMzAiIHk9IjEzNCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMzgiIHk9IjEzNCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNDIiIHk9IjEzNCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNTgiIHk9IjEzNCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNzQiIHk9IjEzNCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNzgiIHk9IjEzNCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI0MiIgeT0iMTM4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjQ2IiB5PSIxMzgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNTAiIHk9IjEzOCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI3MCIgeT0iMTM4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjgyIiB5PSIxMzgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iODYiIHk9IjEzOCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI5MCIgeT0iMTM4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9Ijk0IiB5PSIxMzgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTAyIiB5PSIxMzgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTEwIiB5PSIxMzgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTE0IiB5PSIxMzgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTMwIiB5PSIxMzgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTQ2IiB5PSIxMzgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTU4IiB5PSIxMzgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTgyIiB5PSIxMzgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTkwIiB5PSIxMzgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTk4IiB5PSIxMzgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjAyIiB5PSIxMzgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjA2IiB5PSIxMzgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjE0IiB5PSIxMzgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjE4IiB5PSIxMzgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjQyIiB5PSIxMzgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjU0IiB5PSIxMzgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjYyIiB5PSIxMzgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjY2IiB5PSIxMzgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjc4IiB5PSIxMzgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNDIiIHk9IjE0MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI1NCIgeT0iMTQyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjYyIiB5PSIxNDIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNzAiIHk9IjE0MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI5NCIgeT0iMTQyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9Ijk4IiB5PSIxNDIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTAyIiB5PSIxNDIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTEwIiB5PSIxNDIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTE0IiB5PSIxNDIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTUwIiB5PSIxNDIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTU0IiB5PSIxNDIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTU4IiB5PSIxNDIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTY2IiB5PSIxNDIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTc4IiB5PSIxNDIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTgyIiB5PSIxNDIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTg2IiB5PSIxNDIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTk0IiB5PSIxNDIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjA2IiB5PSIxNDIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjE4IiB5PSIxNDIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjI2IiB5PSIxNDIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjMwIiB5PSIxNDIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjM0IiB5PSIxNDIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjM4IiB5PSIxNDIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjQyIiB5PSIxNDIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjUwIiB5PSIxNDIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjU0IiB5PSIxNDIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjU4IiB5PSIxNDIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjcwIiB5PSIxNDIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjc0IiB5PSIxNDIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjc4IiB5PSIxNDIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMzgiIHk9IjE0NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI0MiIgeT0iMTQ2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjQ2IiB5PSIxNDYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNTgiIHk9IjE0NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI2NiIgeT0iMTQ2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9Ijc4IiB5PSIxNDYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iODIiIHk9IjE0NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI5MCIgeT0iMTQ2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9Ijk0IiB5PSIxNDYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTEwIiB5PSIxNDYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTE0IiB5PSIxNDYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTE4IiB5PSIxNDYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTIyIiB5PSIxNDYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTI2IiB5PSIxNDYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTMwIiB5PSIxNDYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTM0IiB5PSIxNDYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTM4IiB5PSIxNDYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTQyIiB5PSIxNDYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTQ2IiB5PSIxNDYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTU0IiB5PSIxNDYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTYyIiB5PSIxNDYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTY2IiB5PSIxNDYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTc4IiB5PSIxNDYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTgyIiB5PSIxNDYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjAyIiB5PSIxNDYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjA2IiB5PSIxNDYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjE0IiB5PSIxNDYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjE4IiB5PSIxNDYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjM0IiB5PSIxNDYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjM4IiB5PSIxNDYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjQyIiB5PSIxNDYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjU0IiB5PSIxNDYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjYyIiB5PSIxNDYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNDIiIHk9IjE1MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI0NiIgeT0iMTUwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjUwIiB5PSIxNTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNTQiIHk9IjE1MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI1OCIgeT0iMTUwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjYyIiB5PSIxNTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNjYiIHk9IjE1MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI3MCIgeT0iMTUwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9Ijc0IiB5PSIxNTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iODYiIHk9IjE1MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI5MCIgeT0iMTUwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9Ijk4IiB5PSIxNTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTAyIiB5PSIxNTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTA2IiB5PSIxNTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTEwIiB5PSIxNTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTE4IiB5PSIxNTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTIyIiB5PSIxNTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTI2IiB5PSIxNTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTMwIiB5PSIxNTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTM0IiB5PSIxNTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTQyIiB5PSIxNTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTQ2IiB5PSIxNTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTUwIiB5PSIxNTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTU0IiB5PSIxNTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTU4IiB5PSIxNTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTYyIiB5PSIxNTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTY2IiB5PSIxNTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTc0IiB5PSIxNTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTc4IiB5PSIxNTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTkwIiB5PSIxNTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTk4IiB5PSIxNTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjEwIiB5PSIxNTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjE0IiB5PSIxNTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjIyIiB5PSIxNTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjM4IiB5PSIxNTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjQ2IiB5PSIxNTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjUwIiB5PSIxNTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjU0IiB5PSIxNTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjU4IiB5PSIxNTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjYyIiB5PSIxNTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjY2IiB5PSIxNTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjc0IiB5PSIxNTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjc4IiB5PSIxNTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNDIiIHk9IjE1NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI0NiIgeT0iMTU0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjU0IiB5PSIxNTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNzAiIHk9IjE1NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI3NCIgeT0iMTU0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjgyIiB5PSIxNTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iODYiIHk9IjE1NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI5MCIgeT0iMTU0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9Ijk0IiB5PSIxNTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTAyIiB5PSIxNTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTA2IiB5PSIxNTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTEwIiB5PSIxNTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTE4IiB5PSIxNTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTM0IiB5PSIxNTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTM4IiB5PSIxNTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTQyIiB5PSIxNTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTQ2IiB5PSIxNTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTUwIiB5PSIxNTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTY2IiB5PSIxNTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTcwIiB5PSIxNTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTgyIiB5PSIxNTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTg2IiB5PSIxNTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTkwIiB5PSIxNTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTk0IiB5PSIxNTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTk4IiB5PSIxNTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjA2IiB5PSIxNTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjE0IiB5PSIxNTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjE4IiB5PSIxNTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjI2IiB5PSIxNTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjM0IiB5PSIxNTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjM4IiB5PSIxNTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjQ2IiB5PSIxNTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjYyIiB5PSIxNTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjY2IiB5PSIxNTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMzgiIHk9IjE1OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI1MCIgeT0iMTU4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjU0IiB5PSIxNTgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNjIiIHk9IjE1OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI3MCIgeT0iMTU4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9Ijc0IiB5PSIxNTgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNzgiIHk9IjE1OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI4MiIgeT0iMTU4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9Ijg2IiB5PSIxNTgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iOTAiIHk9IjE1OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMTAiIHk9IjE1OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMTQiIHk9IjE1OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMjYiIHk9IjE1OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMzQiIHk9IjE1OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNDIiIHk9IjE1OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNTAiIHk9IjE1OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNTgiIHk9IjE1OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNjYiIHk9IjE1OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNzAiIHk9IjE1OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxOTgiIHk9IjE1OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMDIiIHk9IjE1OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMDYiIHk9IjE1OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMjIiIHk9IjE1OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMzAiIHk9IjE1OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNDIiIHk9IjE1OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNDYiIHk9IjE1OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNTQiIHk9IjE1OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNjIiIHk9IjE1OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNjYiIHk9IjE1OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNzAiIHk9IjE1OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNzgiIHk9IjE1OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI1MCIgeT0iMTYyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjU0IiB5PSIxNjIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNzAiIHk9IjE2MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI3NCIgeT0iMTYyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjgyIiB5PSIxNjIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iODYiIHk9IjE2MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI5OCIgeT0iMTYyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjExOCIgeT0iMTYyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEzOCIgeT0iMTYyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE0NiIgeT0iMTYyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE1MCIgeT0iMTYyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE2NiIgeT0iMTYyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE3MCIgeT0iMTYyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE3NCIgeT0iMTYyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE3OCIgeT0iMTYyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE5MCIgeT0iMTYyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIwMiIgeT0iMTYyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIwNiIgeT0iMTYyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIxMCIgeT0iMTYyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIxNCIgeT0iMTYyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIzMCIgeT0iMTYyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIzNCIgeT0iMTYyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI0MiIgeT0iMTYyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI0NiIgeT0iMTYyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI2MiIgeT0iMTYyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI2NiIgeT0iMTYyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjM4IiB5PSIxNjYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNDIiIHk9IjE2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI0NiIgeT0iMTY2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjUwIiB5PSIxNjYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNTQiIHk9IjE2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI1OCIgeT0iMTY2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjYyIiB5PSIxNjYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNjYiIHk9IjE2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI3MCIgeT0iMTY2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9Ijc4IiB5PSIxNjYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iODIiIHk9IjE2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMDIiIHk9IjE2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMDYiIHk9IjE2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMTAiIHk9IjE2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMTQiIHk9IjE2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMTgiIHk9IjE2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMzQiIHk9IjE2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNDIiIHk9IjE2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNDYiIHk9IjE2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNTAiIHk9IjE2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNTQiIHk9IjE2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNTgiIHk9IjE2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNjIiIHk9IjE2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNjYiIHk9IjE2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxODIiIHk9IjE2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxODYiIHk9IjE2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxOTQiIHk9IjE2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxOTgiIHk9IjE2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMTAiIHk9IjE2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMTQiIHk9IjE2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMTgiIHk9IjE2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMjIiIHk9IjE2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMjYiIHk9IjE2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMzAiIHk9IjE2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMzQiIHk9IjE2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMzgiIHk9IjE2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNDYiIHk9IjE2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNTAiIHk9IjE2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNTQiIHk9IjE2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNTgiIHk9IjE2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNjIiIHk9IjE2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNzAiIHk9IjE2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNzQiIHk9IjE2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNzgiIHk9IjE2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIzOCIgeT0iMTcwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjQ2IiB5PSIxNzAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNTAiIHk9IjE3MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI1NCIgeT0iMTcwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjcwIiB5PSIxNzAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNzQiIHk9IjE3MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI4MiIgeT0iMTcwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9Ijg2IiB5PSIxNzAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iOTAiIHk9IjE3MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI5NCIgeT0iMTcwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEwMiIgeT0iMTcwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEwNiIgeT0iMTcwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjExMCIgeT0iMTcwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEyMiIgeT0iMTcwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEzNCIgeT0iMTcwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE0MiIgeT0iMTcwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE0NiIgeT0iMTcwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE1MCIgeT0iMTcwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE2MiIgeT0iMTcwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE2NiIgeT0iMTcwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE3MCIgeT0iMTcwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE4MiIgeT0iMTcwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE5NCIgeT0iMTcwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE5OCIgeT0iMTcwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIwMiIgeT0iMTcwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIwNiIgeT0iMTcwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIxNCIgeT0iMTcwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIyNiIgeT0iMTcwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIzNCIgeT0iMTcwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI1MCIgeT0iMTcwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI2NiIgeT0iMTcwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjM4IiB5PSIxNzQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNDIiIHk9IjE3NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI0NiIgeT0iMTc0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjUwIiB5PSIxNzQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNTQiIHk9IjE3NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI1OCIgeT0iMTc0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjYyIiB5PSIxNzQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNjYiIHk9IjE3NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI3NCIgeT0iMTc0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9Ijc4IiB5PSIxNzQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iODIiIHk9IjE3NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI4NiIgeT0iMTc0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjkwIiB5PSIxNzQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iOTgiIHk9IjE3NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMDIiIHk9IjE3NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMDYiIHk9IjE3NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMTgiIHk9IjE3NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMjIiIHk9IjE3NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMzAiIHk9IjE3NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMzQiIHk9IjE3NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNDIiIHk9IjE3NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNTAiIHk9IjE3NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNTQiIHk9IjE3NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNjIiIHk9IjE3NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNzAiIHk9IjE3NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxOTQiIHk9IjE3NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxOTgiIHk9IjE3NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMDYiIHk9IjE3NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMjYiIHk9IjE3NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMzAiIHk9IjE3NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNDIiIHk9IjE3NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNDYiIHk9IjE3NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNjIiIHk9IjE3NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNzAiIHk9IjE3NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNzQiIHk9IjE3NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNzgiIHk9IjE3NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIzOCIgeT0iMTc4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjQyIiB5PSIxNzgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNTAiIHk9IjE3OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI1NCIgeT0iMTc4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9Ijc0IiB5PSIxNzgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNzgiIHk9IjE3OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI4NiIgeT0iMTc4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEwMiIgeT0iMTc4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEyMiIgeT0iMTc4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEzMCIgeT0iMTc4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEzNCIgeT0iMTc4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE0NiIgeT0iMTc4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE1MCIgeT0iMTc4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE2MiIgeT0iMTc4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE2NiIgeT0iMTc4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE3NCIgeT0iMTc4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE4NiIgeT0iMTc4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIwMiIgeT0iMTc4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIwNiIgeT0iMTc4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIyNiIgeT0iMTc4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIzNCIgeT0iMTc4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI0MiIgeT0iMTc4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI0NiIgeT0iMTc4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI1MCIgeT0iMTc4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI1NCIgeT0iMTc4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI1OCIgeT0iMTc4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI2NiIgeT0iMTc4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI3NCIgeT0iMTc4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjM4IiB5PSIxODIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNDYiIHk9IjE4MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI1OCIgeT0iMTgyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjYyIiB5PSIxODIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNjYiIHk9IjE4MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI3NCIgeT0iMTgyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9Ijc4IiB5PSIxODIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iODIiIHk9IjE4MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI4NiIgeT0iMTgyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9Ijk0IiB5PSIxODIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTAyIiB5PSIxODIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTEwIiB5PSIxODIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTE0IiB5PSIxODIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTE4IiB5PSIxODIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTI2IiB5PSIxODIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTM0IiB5PSIxODIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTQyIiB5PSIxODIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTQ2IiB5PSIxODIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTUwIiB5PSIxODIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTU4IiB5PSIxODIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTY2IiB5PSIxODIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTgyIiB5PSIxODIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTg2IiB5PSIxODIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTk0IiB5PSIxODIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjEwIiB5PSIxODIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjE0IiB5PSIxODIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjE4IiB5PSIxODIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjIyIiB5PSIxODIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjMwIiB5PSIxODIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjM4IiB5PSIxODIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjQyIiB5PSIxODIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjU0IiB5PSIxODIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjU4IiB5PSIxODIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjY2IiB5PSIxODIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjc4IiB5PSIxODIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMzgiIHk9IjE4NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI0MiIgeT0iMTg2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjQ2IiB5PSIxODYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNTAiIHk9IjE4NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI1NCIgeT0iMTg2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjY2IiB5PSIxODYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNzAiIHk9IjE4NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI3NCIgeT0iMTg2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjgyIiB5PSIxODYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTE4IiB5PSIxODYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTMwIiB5PSIxODYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTM4IiB5PSIxODYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTUwIiB5PSIxODYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTU0IiB5PSIxODYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTcwIiB5PSIxODYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTc0IiB5PSIxODYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTc4IiB5PSIxODYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTkwIiB5PSIxODYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjAyIiB5PSIxODYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjA2IiB5PSIxODYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjE0IiB5PSIxODYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjE4IiB5PSIxODYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjQ2IiB5PSIxODYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjUwIiB5PSIxODYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjU4IiB5PSIxODYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjY2IiB5PSIxODYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjc0IiB5PSIxODYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjc4IiB5PSIxODYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMzgiIHk9IjE5MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI1NCIgeT0iMTkwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjU4IiB5PSIxOTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNjIiIHk9IjE5MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI3MCIgeT0iMTkwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9Ijc4IiB5PSIxOTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iODYiIHk9IjE5MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI5OCIgeT0iMTkwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEwNiIgeT0iMTkwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjExMCIgeT0iMTkwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjExNCIgeT0iMTkwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjExOCIgeT0iMTkwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEyNiIgeT0iMTkwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE1MCIgeT0iMTkwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE1NCIgeT0iMTkwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE1OCIgeT0iMTkwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE2NiIgeT0iMTkwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE3NCIgeT0iMTkwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE3OCIgeT0iMTkwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE4MiIgeT0iMTkwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE5MCIgeT0iMTkwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE5NCIgeT0iMTkwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIwNiIgeT0iMTkwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIxMCIgeT0iMTkwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIxNCIgeT0iMTkwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIyNiIgeT0iMTkwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIzMCIgeT0iMTkwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIzNCIgeT0iMTkwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIzOCIgeT0iMTkwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI0MiIgeT0iMTkwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI1NCIgeT0iMTkwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI2MiIgeT0iMTkwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI3MCIgeT0iMTkwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI3OCIgeT0iMTkwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjM4IiB5PSIxOTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNDIiIHk9IjE5NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI1OCIgeT0iMTk0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjcwIiB5PSIxOTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNzgiIHk9IjE5NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI4NiIgeT0iMTk0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjkwIiB5PSIxOTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iOTQiIHk9IjE5NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI5OCIgeT0iMTk0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEwNiIgeT0iMTk0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjExNCIgeT0iMTk0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjExOCIgeT0iMTk0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEyNiIgeT0iMTk0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEzMCIgeT0iMTk0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEzNCIgeT0iMTk0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE1MCIgeT0iMTk0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE1OCIgeT0iMTk0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE2MiIgeT0iMTk0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE3MCIgeT0iMTk0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE3OCIgeT0iMTk0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE4NiIgeT0iMTk0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE5MCIgeT0iMTk0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE5NCIgeT0iMTk0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIwNiIgeT0iMTk0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIxMCIgeT0iMTk0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIxOCIgeT0iMTk0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIzMCIgeT0iMTk0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI0NiIgeT0iMTk0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI1NCIgeT0iMTk0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI1OCIgeT0iMTk0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI2NiIgeT0iMTk0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI3MCIgeT0iMTk0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjM4IiB5PSIxOTgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNDIiIHk9IjE5OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI1OCIgeT0iMTk4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjYyIiB5PSIxOTgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNjYiIHk9IjE5OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI3OCIgeT0iMTk4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjgyIiB5PSIxOTgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iODYiIHk9IjE5OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMTAiIHk9IjE5OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMTQiIHk9IjE5OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMTgiIHk9IjE5OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMjIiIHk9IjE5OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMzAiIHk9IjE5OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMzgiIHk9IjE5OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNDYiIHk9IjE5OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNTQiIHk9IjE5OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNTgiIHk9IjE5OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNzAiIHk9IjE5OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxOTAiIHk9IjE5OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxOTQiIHk9IjE5OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMDIiIHk9IjE5OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMTAiIHk9IjE5OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMzgiIHk9IjE5OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNDIiIHk9IjE5OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNTQiIHk9IjE5OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNTgiIHk9IjE5OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNjIiIHk9IjE5OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNjYiIHk9IjE5OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNzQiIHk9IjE5OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNzgiIHk9IjE5OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIzOCIgeT0iMjAyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjU0IiB5PSIyMDIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNzAiIHk9IjIwMiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI4NiIgeT0iMjAyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjkwIiB5PSIyMDIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iOTQiIHk9IjIwMiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI5OCIgeT0iMjAyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEwMiIgeT0iMjAyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjExMCIgeT0iMjAyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjExNCIgeT0iMjAyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEyMiIgeT0iMjAyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEyNiIgeT0iMjAyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE0MiIgeT0iMjAyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE0NiIgeT0iMjAyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE1MCIgeT0iMjAyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE1NCIgeT0iMjAyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE2MiIgeT0iMjAyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE3MCIgeT0iMjAyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE3OCIgeT0iMjAyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE5MCIgeT0iMjAyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE5OCIgeT0iMjAyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIwNiIgeT0iMjAyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIxNCIgeT0iMjAyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIxOCIgeT0iMjAyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIzNCIgeT0iMjAyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIzOCIgeT0iMjAyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI0NiIgeT0iMjAyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjM4IiB5PSIyMDYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNDIiIHk9IjIwNiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI0NiIgeT0iMjA2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjYyIiB5PSIyMDYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNzAiIHk9IjIwNiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI4MiIgeT0iMjA2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjkwIiB5PSIyMDYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iOTQiIHk9IjIwNiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI5OCIgeT0iMjA2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEwMiIgeT0iMjA2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjExMCIgeT0iMjA2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEyMiIgeT0iMjA2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEyNiIgeT0iMjA2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEzNCIgeT0iMjA2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE0NiIgeT0iMjA2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE2MiIgeT0iMjA2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE3MCIgeT0iMjA2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE3NCIgeT0iMjA2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE3OCIgeT0iMjA2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE4MiIgeT0iMjA2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE4NiIgeT0iMjA2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE5MCIgeT0iMjA2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE5NCIgeT0iMjA2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIxMCIgeT0iMjA2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIyNiIgeT0iMjA2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIzMCIgeT0iMjA2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIzOCIgeT0iMjA2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI0MiIgeT0iMjA2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI1NCIgeT0iMjA2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI1OCIgeT0iMjA2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI2MiIgeT0iMjA2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI2NiIgeT0iMjA2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI3MCIgeT0iMjA2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI3OCIgeT0iMjA2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjQyIiB5PSIyMTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNDYiIHk9IjIxMCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI1MCIgeT0iMjEwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjcwIiB5PSIyMTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNzQiIHk9IjIxMCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI3OCIgeT0iMjEwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjgyIiB5PSIyMTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iOTAiIHk9IjIxMCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMDIiIHk9IjIxMCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMTQiIHk9IjIxMCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMjYiIHk9IjIxMCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMzAiIHk9IjIxMCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMzQiIHk9IjIxMCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNTAiIHk9IjIxMCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNTgiIHk9IjIxMCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNjIiIHk9IjIxMCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNzAiIHk9IjIxMCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxODYiIHk9IjIxMCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxOTAiIHk9IjIxMCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMDYiIHk9IjIxMCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMTQiIHk9IjIxMCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMTgiIHk9IjIxMCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMzAiIHk9IjIxMCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMzQiIHk9IjIxMCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNTAiIHk9IjIxMCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNzQiIHk9IjIxMCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIzOCIgeT0iMjE0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjQyIiB5PSIyMTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNTgiIHk9IjIxNCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI2MiIgeT0iMjE0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjY2IiB5PSIyMTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNzAiIHk9IjIxNCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI3NCIgeT0iMjE0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9Ijc4IiB5PSIyMTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iODIiIHk9IjIxNCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI4NiIgeT0iMjE0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjkwIiB5PSIyMTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iOTQiIHk9IjIxNCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI5OCIgeT0iMjE0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEwMiIgeT0iMjE0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjExMCIgeT0iMjE0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjExOCIgeT0iMjE0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEzNCIgeT0iMjE0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE0NiIgeT0iMjE0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE1NCIgeT0iMjE0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE2NiIgeT0iMjE0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE3MCIgeT0iMjE0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE3OCIgeT0iMjE0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE4MiIgeT0iMjE0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE4NiIgeT0iMjE0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE5MCIgeT0iMjE0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIwMiIgeT0iMjE0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIyMiIgeT0iMjE0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIzMCIgeT0iMjE0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIzOCIgeT0iMjE0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI0MiIgeT0iMjE0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI1MCIgeT0iMjE0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI1NCIgeT0iMjE0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI3NCIgeT0iMjE0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI3OCIgeT0iMjE0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjQyIiB5PSIyMTgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNTgiIHk9IjIxOCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI3NCIgeT0iMjE4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9Ijc4IiB5PSIyMTgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iOTAiIHk9IjIxOCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI5NCIgeT0iMjE4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9Ijk4IiB5PSIyMTgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTAyIiB5PSIyMTgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTA2IiB5PSIyMTgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTE0IiB5PSIyMTgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTE4IiB5PSIyMTgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTIyIiB5PSIyMTgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTM0IiB5PSIyMTgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTQ2IiB5PSIyMTgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTU0IiB5PSIyMTgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTU4IiB5PSIyMTgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTc4IiB5PSIyMTgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTgyIiB5PSIyMTgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTg2IiB5PSIyMTgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTk4IiB5PSIyMTgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjAyIiB5PSIyMTgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjA2IiB5PSIyMTgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjE0IiB5PSIyMTgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjE4IiB5PSIyMTgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjIyIiB5PSIyMTgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjI2IiB5PSIyMTgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjM0IiB5PSIyMTgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjM4IiB5PSIyMTgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjQ2IiB5PSIyMTgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjU4IiB5PSIyMTgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjY2IiB5PSIyMTgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjc0IiB5PSIyMTgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNTAiIHk9IjIyMiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI1OCIgeT0iMjIyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjYyIiB5PSIyMjIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iODIiIHk9IjIyMiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI4NiIgeT0iMjIyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjkwIiB5PSIyMjIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iOTQiIHk9IjIyMiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI5OCIgeT0iMjIyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEwNiIgeT0iMjIyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjExOCIgeT0iMjIyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEyNiIgeT0iMjIyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE0MiIgeT0iMjIyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE1MCIgeT0iMjIyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE1OCIgeT0iMjIyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE3MCIgeT0iMjIyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE3NCIgeT0iMjIyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE4MiIgeT0iMjIyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE4NiIgeT0iMjIyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE5NCIgeT0iMjIyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIwNiIgeT0iMjIyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIxMCIgeT0iMjIyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIxOCIgeT0iMjIyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIyMiIgeT0iMjIyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIyNiIgeT0iMjIyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIzMCIgeT0iMjIyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIzOCIgeT0iMjIyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI0MiIgeT0iMjIyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI2MiIgeT0iMjIyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI2NiIgeT0iMjIyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI3NCIgeT0iMjIyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjQyIiB5PSIyMjYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNDYiIHk9IjIyNiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI1NCIgeT0iMjI2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9Ijc4IiB5PSIyMjYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iODYiIHk9IjIyNiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI5OCIgeT0iMjI2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEwMiIgeT0iMjI2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEwNiIgeT0iMjI2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjExMCIgeT0iMjI2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjExNCIgeT0iMjI2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjExOCIgeT0iMjI2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEyMiIgeT0iMjI2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEyNiIgeT0iMjI2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEzMCIgeT0iMjI2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEzNCIgeT0iMjI2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE0MiIgeT0iMjI2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE0NiIgeT0iMjI2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE1MCIgeT0iMjI2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE1NCIgeT0iMjI2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE2MiIgeT0iMjI2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE2NiIgeT0iMjI2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE3MCIgeT0iMjI2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE3NCIgeT0iMjI2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE3OCIgeT0iMjI2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE5MCIgeT0iMjI2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE5OCIgeT0iMjI2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIwMiIgeT0iMjI2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIwNiIgeT0iMjI2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIxNCIgeT0iMjI2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIyNiIgeT0iMjI2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIzMCIgeT0iMjI2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI0MiIgeT0iMjI2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI0NiIgeT0iMjI2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI1NCIgeT0iMjI2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI1OCIgeT0iMjI2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI2NiIgeT0iMjI2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjM4IiB5PSIyMzAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNDYiIHk9IjIzMCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI1MCIgeT0iMjMwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjU4IiB5PSIyMzAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNjIiIHk9IjIzMCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI2NiIgeT0iMjMwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9Ijc4IiB5PSIyMzAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTA2IiB5PSIyMzAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTE4IiB5PSIyMzAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTIyIiB5PSIyMzAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTI2IiB5PSIyMzAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTQyIiB5PSIyMzAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTQ2IiB5PSIyMzAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTY2IiB5PSIyMzAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTc0IiB5PSIyMzAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTc4IiB5PSIyMzAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTgyIiB5PSIyMzAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjIyIiB5PSIyMzAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjMwIiB5PSIyMzAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjM0IiB5PSIyMzAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjM4IiB5PSIyMzAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjQyIiB5PSIyMzAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjUwIiB5PSIyMzAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjU0IiB5PSIyMzAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjU4IiB5PSIyMzAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjYyIiB5PSIyMzAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjY2IiB5PSIyMzAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjc0IiB5PSIyMzAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjc4IiB5PSIyMzAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNDYiIHk9IjIzNCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI1MCIgeT0iMjM0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjU4IiB5PSIyMzQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNjYiIHk9IjIzNCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI4NiIgeT0iMjM0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjkwIiB5PSIyMzQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iOTQiIHk9IjIzNCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMDIiIHk9IjIzNCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMTQiIHk9IjIzNCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMzAiIHk9IjIzNCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMzQiIHk9IjIzNCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMzgiIHk9IjIzNCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNDIiIHk9IjIzNCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNDYiIHk9IjIzNCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNTQiIHk9IjIzNCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNTgiIHk9IjIzNCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNjIiIHk9IjIzNCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNzAiIHk9IjIzNCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNzQiIHk9IjIzNCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNzgiIHk9IjIzNCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxODIiIHk9IjIzNCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxODYiIHk9IjIzNCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxOTgiIHk9IjIzNCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMDYiIHk9IjIzNCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMTQiIHk9IjIzNCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMTgiIHk9IjIzNCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMjYiIHk9IjIzNCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMzAiIHk9IjIzNCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNDYiIHk9IjIzNCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNzQiIHk9IjIzNCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNzgiIHk9IjIzNCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI0NiIgeT0iMjM4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjUwIiB5PSIyMzgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNTQiIHk9IjIzOCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI1OCIgeT0iMjM4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjYyIiB5PSIyMzgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNjYiIHk9IjIzOCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI3MCIgeT0iMjM4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9Ijc0IiB5PSIyMzgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iODIiIHk9IjIzOCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI5MCIgeT0iMjM4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9Ijk0IiB5PSIyMzgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iOTgiIHk9IjIzOCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMDIiIHk9IjIzOCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMDYiIHk9IjIzOCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMjIiIHk9IjIzOCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMjYiIHk9IjIzOCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMzQiIHk9IjIzOCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMzgiIHk9IjIzOCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNDIiIHk9IjIzOCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNTAiIHk9IjIzOCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNTQiIHk9IjIzOCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNTgiIHk9IjIzOCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNjIiIHk9IjIzOCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNjYiIHk9IjIzOCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNzAiIHk9IjIzOCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNzgiIHk9IjIzOCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxODIiIHk9IjIzOCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxOTAiIHk9IjIzOCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxOTQiIHk9IjIzOCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMDIiIHk9IjIzOCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMDYiIHk9IjIzOCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMTAiIHk9IjIzOCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMTgiIHk9IjIzOCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMjIiIHk9IjIzOCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMzAiIHk9IjIzOCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMzgiIHk9IjIzOCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNDIiIHk9IjIzOCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNDYiIHk9IjIzOCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNTQiIHk9IjIzOCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNjIiIHk9IjIzOCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNzAiIHk9IjIzOCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNzgiIHk9IjIzOCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIzOCIgeT0iMjQyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjQyIiB5PSIyNDIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNDYiIHk9IjI0MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI1NCIgeT0iMjQyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9Ijc0IiB5PSIyNDIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNzgiIHk9IjI0MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI4MiIgeT0iMjQyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjkwIiB5PSIyNDIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iOTQiIHk9IjI0MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMDYiIHk9IjI0MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMTgiIHk9IjI0MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMjIiIHk9IjI0MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMjYiIHk9IjI0MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMzAiIHk9IjI0MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMzQiIHk9IjI0MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNTAiIHk9IjI0MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNjIiIHk9IjI0MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNjYiIHk9IjI0MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNzAiIHk9IjI0MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNzQiIHk9IjI0MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNzgiIHk9IjI0MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxODIiIHk9IjI0MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxODYiIHk9IjI0MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxOTAiIHk9IjI0MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxOTgiIHk9IjI0MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMDIiIHk9IjI0MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMTQiIHk9IjI0MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMjYiIHk9IjI0MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMzAiIHk9IjI0MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMzQiIHk9IjI0MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNDYiIHk9IjI0MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNTAiIHk9IjI0MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNTQiIHk9IjI0MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNTgiIHk9IjI0MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNjYiIHk9IjI0MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIzOCIgeT0iMjQ2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjQyIiB5PSIyNDYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNDYiIHk9IjI0NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI1MCIgeT0iMjQ2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjYyIiB5PSIyNDYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNjYiIHk9IjI0NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI3MCIgeT0iMjQ2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9Ijc0IiB5PSIyNDYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iOTgiIHk9IjI0NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMTAiIHk9IjI0NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMjYiIHk9IjI0NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMzQiIHk9IjI0NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNTAiIHk9IjI0NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNTQiIHk9IjI0NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNTgiIHk9IjI0NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNjIiIHk9IjI0NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNjYiIHk9IjI0NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNzAiIHk9IjI0NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNzQiIHk9IjI0NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxODYiIHk9IjI0NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxOTAiIHk9IjI0NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxOTQiIHk9IjI0NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMTgiIHk9IjI0NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMjIiIHk9IjI0NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMjYiIHk9IjI0NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMzAiIHk9IjI0NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMzgiIHk9IjI0NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNDYiIHk9IjI0NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNTAiIHk9IjI0NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNTQiIHk9IjI0NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNTgiIHk9IjI0NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNjIiIHk9IjI0NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNzAiIHk9IjI0NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNzQiIHk9IjI0NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNzgiIHk9IjI0NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI3MCIgeT0iMjUwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9Ijg2IiB5PSIyNTAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iOTgiIHk9IjI1MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMTAiIHk9IjI1MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMTQiIHk9IjI1MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMTgiIHk9IjI1MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMjYiIHk9IjI1MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMzAiIHk9IjI1MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMzQiIHk9IjI1MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNDIiIHk9IjI1MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNDYiIHk9IjI1MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNTAiIHk9IjI1MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNjYiIHk9IjI1MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNzAiIHk9IjI1MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxODIiIHk9IjI1MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxOTQiIHk9IjI1MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxOTgiIHk9IjI1MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMDIiIHk9IjI1MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMTAiIHk9IjI1MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMTQiIHk9IjI1MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMjIiIHk9IjI1MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNDIiIHk9IjI1MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNDYiIHk9IjI1MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNjIiIHk9IjI1MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNzgiIHk9IjI1MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIzOCIgeT0iMjU0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjQyIiB5PSIyNTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNDYiIHk9IjI1NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI1MCIgeT0iMjU0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjU0IiB5PSIyNTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNTgiIHk9IjI1NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI2MiIgeT0iMjU0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9Ijc0IiB5PSIyNTQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNzgiIHk9IjI1NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI5NCIgeT0iMjU0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEwNiIgeT0iMjU0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjExMCIgeT0iMjU0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjExNCIgeT0iMjU0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjExOCIgeT0iMjU0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEyNiIgeT0iMjU0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEzNCIgeT0iMjU0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEzOCIgeT0iMjU0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE0MiIgeT0iMjU0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE0NiIgeT0iMjU0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE1MCIgeT0iMjU0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE1OCIgeT0iMjU0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE2NiIgeT0iMjU0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE3OCIgeT0iMjU0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE4NiIgeT0iMjU0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIwNiIgeT0iMjU0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIyNiIgeT0iMjU0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIzMCIgeT0iMjU0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIzNCIgeT0iMjU0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI0NiIgeT0iMjU0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI1NCIgeT0iMjU0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI2MiIgeT0iMjU0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI3MCIgeT0iMjU0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI3NCIgeT0iMjU0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI3OCIgeT0iMjU0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjM4IiB5PSIyNTgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNjIiIHk9IjI1OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI3OCIgeT0iMjU4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjgyIiB5PSIyNTgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iODYiIHk9IjI1OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMTAiIHk9IjI1OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMTgiIHk9IjI1OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMjIiIHk9IjI1OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMzAiIHk9IjI1OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMzgiIHk9IjI1OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNDYiIHk9IjI1OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNTAiIHk9IjI1OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNjYiIHk9IjI1OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxOTAiIHk9IjI1OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxOTgiIHk9IjI1OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMDIiIHk9IjI1OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMDYiIHk9IjI1OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMTAiIHk9IjI1OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMjYiIHk9IjI1OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMzAiIHk9IjI1OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNDIiIHk9IjI1OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNDYiIHk9IjI1OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNjIiIHk9IjI1OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNjYiIHk9IjI1OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIzOCIgeT0iMjYyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjQ2IiB5PSIyNjIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNTAiIHk9IjI2MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI1NCIgeT0iMjYyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjYyIiB5PSIyNjIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNzAiIHk9IjI2MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI3NCIgeT0iMjYyIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9Ijc4IiB5PSIyNjIiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iOTAiIHk9IjI2MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMDIiIHk9IjI2MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMDYiIHk9IjI2MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMTAiIHk9IjI2MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMjIiIHk9IjI2MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMjYiIHk9IjI2MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMzAiIHk9IjI2MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNTAiIHk9IjI2MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNTQiIHk9IjI2MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNTgiIHk9IjI2MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNjIiIHk9IjI2MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNjYiIHk9IjI2MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNzAiIHk9IjI2MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxODYiIHk9IjI2MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxOTQiIHk9IjI2MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMjIiIHk9IjI2MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMzAiIHk9IjI2MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMzQiIHk9IjI2MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMzgiIHk9IjI2MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNDIiIHk9IjI2MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNDYiIHk9IjI2MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNTAiIHk9IjI2MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNTQiIHk9IjI2MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNTgiIHk9IjI2MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNjIiIHk9IjI2MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNjYiIHk9IjI2MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNzAiIHk9IjI2MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNzQiIHk9IjI2MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNzgiIHk9IjI2MiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIzOCIgeT0iMjY2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjQ2IiB5PSIyNjYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNTAiIHk9IjI2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI1NCIgeT0iMjY2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjYyIiB5PSIyNjYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNzAiIHk9IjI2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI4MiIgeT0iMjY2IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9Ijg2IiB5PSIyNjYiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iOTgiIHk9IjI2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMDIiIHk9IjI2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMTAiIHk9IjI2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMTQiIHk9IjI2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMjIiIHk9IjI2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMzAiIHk9IjI2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMzQiIHk9IjI2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNDIiIHk9IjI2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNTAiIHk9IjI2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxODIiIHk9IjI2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxOTQiIHk9IjI2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxOTgiIHk9IjI2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMTAiIHk9IjI2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMTQiIHk9IjI2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMTgiIHk9IjI2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNDYiIHk9IjI2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNTAiIHk9IjI2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNTQiIHk9IjI2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNTgiIHk9IjI2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNjIiIHk9IjI2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNjYiIHk9IjI2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNzQiIHk9IjI2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNzgiIHk9IjI2NiIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIzOCIgeT0iMjcwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjQ2IiB5PSIyNzAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNTAiIHk9IjI3MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI1NCIgeT0iMjcwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjYyIiB5PSIyNzAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNzAiIHk9IjI3MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI3NCIgeT0iMjcwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9Ijc4IiB5PSIyNzAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iODIiIHk9IjI3MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI4NiIgeT0iMjcwIiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjkwIiB5PSIyNzAiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iOTQiIHk9IjI3MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMDIiIHk9IjI3MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMTAiIHk9IjI3MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMjYiIHk9IjI3MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMzAiIHk9IjI3MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxMzQiIHk9IjI3MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNDYiIHk9IjI3MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNTAiIHk9IjI3MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNTQiIHk9IjI3MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNTgiIHk9IjI3MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNjIiIHk9IjI3MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNjYiIHk9IjI3MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxNzgiIHk9IjI3MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIxODYiIHk9IjI3MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMDIiIHk9IjI3MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMDYiIHk9IjI3MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMTgiIHk9IjI3MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMjIiIHk9IjI3MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMjYiIHk9IjI3MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMzAiIHk9IjI3MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMzQiIHk9IjI3MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyMzgiIHk9IjI3MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNTAiIHk9IjI3MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNjYiIHk9IjI3MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNzAiIHk9IjI3MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIyNzgiIHk9IjI3MCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSIzOCIgeT0iMjc0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjYyIiB5PSIyNzQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNzQiIHk9IjI3NCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI4MiIgeT0iMjc0IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjkwIiB5PSIyNzQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTA2IiB5PSIyNzQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTE0IiB5PSIyNzQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTIyIiB5PSIyNzQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTI2IiB5PSIyNzQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTM0IiB5PSIyNzQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTM4IiB5PSIyNzQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTQ2IiB5PSIyNzQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTUwIiB5PSIyNzQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTU4IiB5PSIyNzQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTYyIiB5PSIyNzQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTcwIiB5PSIyNzQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTc4IiB5PSIyNzQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTg2IiB5PSIyNzQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMTk0IiB5PSIyNzQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjA2IiB5PSIyNzQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjEwIiB5PSIyNzQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjQ2IiB5PSIyNzQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjYyIiB5PSIyNzQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjcwIiB5PSIyNzQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMjc0IiB5PSIyNzQiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iMzgiIHk9IjI3OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI0MiIgeT0iMjc4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjQ2IiB5PSIyNzgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNTAiIHk9IjI3OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI1NCIgeT0iMjc4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjU4IiB5PSIyNzgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iNjIiIHk9IjI3OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI3OCIgeT0iMjc4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9Ijg2IiB5PSIyNzgiIHhsaW5rOmhyZWY9IiNibG9jayIvPjx1c2UgeD0iOTAiIHk9IjI3OCIgeGxpbms6aHJlZj0iI2Jsb2NrIi8+PHVzZSB4PSI5OCIgeT0iMjc4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEwNiIgeT0iMjc4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjExMCIgeT0iMjc4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjExNCIgeT0iMjc4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEyMiIgeT0iMjc4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEyNiIgeT0iMjc4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjEzMCIgeT0iMjc4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE1NCIgeT0iMjc4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE1OCIgeT0iMjc4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE2NiIgeT0iMjc4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE3MCIgeT0iMjc4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE3NCIgeT0iMjc4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE4MiIgeT0iMjc4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE5MCIgeT0iMjc4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE5NCIgeT0iMjc4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjE5OCIgeT0iMjc4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIwMiIgeT0iMjc4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIxOCIgeT0iMjc4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIyMiIgeT0iMjc4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIzMCIgeT0iMjc4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIzNCIgeT0iMjc4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjIzOCIgeT0iMjc4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI1NCIgeT0iMjc4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI1OCIgeT0iMjc4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI3MCIgeT0iMjc4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI3NCIgeT0iMjc4IiB4bGluazpocmVmPSIjYmxvY2siLz48dXNlIHg9IjI3OCIgeT0iMjc4IiB4bGluazpocmVmPSIjYmxvY2siLz48L3N2Zz4K",
                ],
              },
            },
          },
        },
      },
      $schema: "https://json-schema.org/draft/2020-12/schema#",
    },
    "404": {
      type: "object",
      properties: {
        status: { type: "string", examples: ["error"] },
        message: {
          type: "string",
          examples: [
            "An error occurred: No QrCode found with UUID d351f609-d3d2-4424-a0dc-b282fdbebb7",
          ],
        },
      },
      $schema: "https://json-schema.org/draft/2020-12/schema#",
    },
  },
} as const;
const RetrieveATransaction = {
  metadata: {
    allOf: [
      {
        type: "object",
        properties: {
          id: {
            type: "integer",
            format: "int32",
            default: 0,
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: "https://json-schema.org/draft/2020-12/schema#",
            description: "ID of transaction to retrieve.",
          },
        },
        required: ["id"],
      },
      {
        type: "object",
        properties: {
          instance: {
            type: "string",
            $schema: "https://json-schema.org/draft/2020-12/schema#",
            description: "Your Payrexx instance name.",
          },
        },
        required: ["instance"],
      },
    ],
  },
  response: {
    "200": { $schema: "https://json-schema.org/draft/2020-12/schema#" },
  },
} as const;
const RetrieveAllDesigns = {
  body: {
    type: "object",
    properties: {
      offset: {
        type: "integer",
        description: "Row count to be used as offset",
        format: "int32",
        minimum: -2147483648,
        maximum: 2147483647,
      },
      limit: {
        type: "integer",
        description: "Max row count",
        format: "int32",
        minimum: -2147483648,
        maximum: 2147483647,
      },
    },
    $schema: "https://json-schema.org/draft/2020-12/schema#",
  },
  metadata: {
    allOf: [
      {
        type: "object",
        properties: {
          instance: {
            type: "string",
            $schema: "https://json-schema.org/draft/2020-12/schema#",
            description: "Your Payrexx instance name",
          },
        },
        required: ["instance"],
      },
    ],
  },
  response: {
    "200": {
      type: "object",
      properties: {
        status: { type: "string", examples: ["success"] },
        data: {
          type: "array",
          items: {
            type: "object",
            properties: {
              uuid: { type: "string", examples: ["f45aff72"] },
              default: { type: "integer", default: 0, examples: [0] },
              name: { type: "string", examples: ["Example Design (via API)"] },
              fontFamily: { type: "string", examples: ["Arial"] },
              fontSize: { type: "string", examples: ["14"] },
              textColor: { type: "string", examples: ["24363A"] },
              textColorVPOS: { type: "string", examples: ["24363a"] },
              linkColor: { type: "string", examples: ["0074D6"] },
              linkHoverColor: { type: "string", examples: ["2A6496"] },
              buttonColor: { type: "string", examples: ["99CC33"] },
              buttonHoverColor: { type: "string", examples: ["19B8F2"] },
              background: { type: "string", examples: ["color"] },
              backgroundColor: { type: "string", examples: ["F9FAFA"] },
              headerBackground: { type: "string", examples: ["color"] },
              headerBackgroundColor: { type: "string", examples: ["00AFF0"] },
              emailHeaderBackgroundColor: {
                type: "string",
                examples: ["FAFAFA"],
              },
              headerImageShape: { type: "string", examples: ["square"] },
              useIndividualEmailLogo: {
                type: "integer",
                default: 0,
                examples: [0],
              },
              logoBackgroundColor: { type: "string", examples: ["FFFFFF"] },
              logoBorderColor: { type: "string", examples: ["DDDDDD"] },
              VPOSGradientColor1: { type: "string", examples: ["00AFF0"] },
              VPOSGradientColor2: { type: "string", examples: ["00AFF0"] },
              enableRoundedCorners: {
                type: "integer",
                default: 0,
                examples: [1],
              },
              headerImage: { type: "string", examples: ["payrexx-logo.png"] },
              backgroundImage: { type: "string", examples: [""] },
              headerBackgroundImage: { type: "string", examples: [""] },
              emailHeaderImage: { type: "string", examples: [""] },
              headerImageCustomLink: { type: "string", examples: ["false"] },
            },
          },
        },
      },
      $schema: "https://json-schema.org/draft/2020-12/schema#",
    },
  },
} as const;
const RetrieveAllPaymentProviders = {
  metadata: {
    allOf: [
      {
        type: "object",
        properties: {
          instance: {
            type: "string",
            $schema: "https://json-schema.org/draft/2020-12/schema#",
            description: "Your Payrexx instance name.",
          },
        },
        required: ["instance"],
      },
    ],
  },
  response: {
    "200": {
      type: "object",
      properties: {
        status: { type: "string", examples: ["success"] },
        data: {
          type: "array",
          items: {
            type: "object",
            properties: {
              id: { type: "integer", default: 0, examples: [12] },
              name: { type: "string", examples: ["PostFinance Alias Gateway"] },
              availableBalance: {},
              paymentMethods: {
                type: "array",
                items: { type: "string", examples: ["masterpass"] },
              },
              activePaymentMethods: {
                type: "array",
                items: { type: "string", examples: ["postfinance_card"] },
              },
            },
          },
        },
      },
      $schema: "https://json-schema.org/draft/2020-12/schema#",
    },
  },
} as const;
const RetrievePages = {
  metadata: {
    allOf: [
      {
        type: "object",
        properties: {
          type: {
            type: "string",
            default: "shop",
            $schema: "https://json-schema.org/draft/2020-12/schema#",
            description: "The type of your page (shop / donation)",
          },
          instance: {
            type: "string",
            $schema: "https://json-schema.org/draft/2020-12/schema#",
            description: "Your Payrexx instance name",
          },
        },
        required: ["type", "instance"],
      },
    ],
  },
  response: {
    "200": {
      type: "object",
      properties: {
        status: { type: "string", examples: ["success"] },
        data: {
          type: "array",
          items: {
            type: "object",
            properties: {
              id: { type: "integer", default: 0, examples: [122] },
              uuid: { type: "string", examples: ["99c54c5a"] },
              type: { type: "string", examples: ["shop"] },
              donatedAmount: { type: "integer", default: 0, examples: [0] },
              donationGoalAmount: {},
              donationPercentage: {},
              link: { type: "string", examples: ["https://test.com"] },
              name: { type: "string", examples: [""] },
              title: { type: "string", examples: ["Test"] },
              description: { type: "string", examples: ["Test"] },
              buttonText: { type: "string", examples: [""] },
              fields: {
                type: "object",
                properties: {
                  email: {
                    type: "object",
                    properties: {
                      active: {
                        type: "boolean",
                        default: true,
                        examples: [true],
                      },
                      mandatory: {
                        type: "boolean",
                        default: true,
                        examples: [false],
                      },
                    },
                  },
                  company: {
                    type: "object",
                    properties: {
                      active: {
                        type: "boolean",
                        default: true,
                        examples: [true],
                      },
                      mandatory: {
                        type: "boolean",
                        default: true,
                        examples: [false],
                      },
                    },
                  },
                  title: {
                    type: "object",
                    properties: {
                      active: {
                        type: "boolean",
                        default: true,
                        examples: [true],
                      },
                      mandatory: {
                        type: "boolean",
                        default: true,
                        examples: [false],
                      },
                    },
                  },
                  forename: {
                    type: "object",
                    properties: {
                      active: {
                        type: "boolean",
                        default: true,
                        examples: [true],
                      },
                      mandatory: {
                        type: "boolean",
                        default: true,
                        examples: [false],
                      },
                    },
                  },
                  surname: {
                    type: "object",
                    properties: {
                      active: {
                        type: "boolean",
                        default: true,
                        examples: [true],
                      },
                      mandatory: {
                        type: "boolean",
                        default: true,
                        examples: [false],
                      },
                    },
                  },
                  street: {
                    type: "object",
                    properties: {
                      active: {
                        type: "boolean",
                        default: true,
                        examples: [true],
                      },
                      mandatory: {
                        type: "boolean",
                        default: true,
                        examples: [false],
                      },
                    },
                  },
                  postcode: {
                    type: "object",
                    properties: {
                      active: {
                        type: "boolean",
                        default: true,
                        examples: [true],
                      },
                      mandatory: {
                        type: "boolean",
                        default: true,
                        examples: [false],
                      },
                    },
                  },
                  place: {
                    type: "object",
                    properties: {
                      active: {
                        type: "boolean",
                        default: true,
                        examples: [true],
                      },
                      mandatory: {
                        type: "boolean",
                        default: true,
                        examples: [false],
                      },
                    },
                  },
                  country: {
                    type: "object",
                    properties: {
                      active: {
                        type: "boolean",
                        default: true,
                        examples: [true],
                      },
                      mandatory: {
                        type: "boolean",
                        default: true,
                        examples: [false],
                      },
                    },
                  },
                  phone: {
                    type: "object",
                    properties: {
                      active: {
                        type: "boolean",
                        default: true,
                        examples: [true],
                      },
                      mandatory: {
                        type: "boolean",
                        default: true,
                        examples: [false],
                      },
                    },
                  },
                  confirm_email: {
                    type: "object",
                    properties: {
                      active: {
                        type: "boolean",
                        default: true,
                        examples: [true],
                      },
                      mandatory: {
                        type: "boolean",
                        default: true,
                        examples: [false],
                      },
                    },
                  },
                  date_of_birth: {
                    type: "object",
                    properties: {
                      active: {
                        type: "boolean",
                        default: true,
                        examples: [true],
                      },
                      mandatory: {
                        type: "boolean",
                        default: true,
                        examples: [false],
                      },
                    },
                  },
                },
              },
              psp: {
                type: "array",
                items: { type: "integer", default: 0, examples: [44] },
              },
              pm: { type: "array", items: {} },
              subscriptionInterval: { type: "string", examples: ["P10D"] },
              subscriptionPeriod: { type: "string", examples: ["P10D"] },
              subscriptionPeriodMinAmount: {
                type: "integer",
                default: 0,
                examples: [0],
              },
              subscriptionCancellationInterval: {
                type: "string",
                examples: ["P70D"],
              },
              createdAt: {
                type: "integer",
                default: 0,
                examples: [1518566400],
              },
            },
          },
        },
      },
      $schema: "https://json-schema.org/draft/2020-12/schema#",
    },
    "404": {
      type: "object",
      properties: {
        status: { type: "string", examples: ["error"] },
        message: {
          type: "string",
          examples: ["An error occurred: No Page found with id 145"],
        },
      },
      $schema: "https://json-schema.org/draft/2020-12/schema#",
    },
  },
} as const;
const RetrievePayout = {
  metadata: {
    allOf: [
      {
        type: "object",
        properties: {
          uuid: {
            type: "string",
            default: "8",
            $schema: "https://json-schema.org/draft/2020-12/schema#",
            description: "Payout UUID",
          },
        },
        required: ["uuid"],
      },
      {
        type: "object",
        properties: {
          instance: {
            type: "string",
            $schema: "https://json-schema.org/draft/2020-12/schema#",
            description: "Your Payrexx instance name",
          },
        },
        required: ["instance"],
      },
    ],
  },
  response: {
    "200": {
      type: "object",
      properties: {
        status: { type: "string", examples: ["success"] },
        data: {
          type: "object",
          properties: {
            uuid: { type: "string", examples: ["C6B438B9"] },
            mode: { type: "string", examples: ["LIVE"] },
            object: { type: "string", examples: ["payout"] },
            amount: { type: "integer", default: 0, examples: [1000] },
            total_fees: { type: "integer", default: 0, examples: [0] },
            currency: { type: "string", examples: ["CHF"] },
            date: { type: "string", examples: ["2023-01-06"] },
            statement: { type: "string", examples: [""] },
            status: { type: "string", examples: ["pending"] },
            destination: {
              type: "object",
              properties: { type: {}, iban: {}, account_holder: {} },
            },
            transfers: { type: "array", items: {} },
            merchant: {
              type: "object",
              properties: {
                name: { type: "string", examples: ["demo"] },
                site_title: { type: "string", examples: ["Payrexx"] },
                owner: {
                  type: "object",
                  properties: {
                    company: { type: "string", examples: ["Demo Firma"] },
                    first_name: { type: "string", examples: ["Vorname"] },
                    last_name: { type: "string", examples: ["Nachname"] },
                    address: {
                      type: "string",
                      examples: ["strasse 1324 1234"],
                    },
                    zip: { type: "string", examples: ["1234"] },
                    place: { type: "string", examples: ["ort"] },
                    email: { type: "string", examples: ["info@payrexx.com"] },
                  },
                },
              },
            },
          },
        },
      },
      $schema: "https://json-schema.org/draft/2020-12/schema#",
    },
  },
} as const;
const RetrievePayoutWithDetails = {
  metadata: {
    allOf: [
      {
        type: "object",
        properties: {
          uuid: {
            type: "string",
            default: "8",
            $schema: "https://json-schema.org/draft/2020-12/schema#",
            description: "Payout UUID",
          },
        },
        required: ["uuid"],
      },
      {
        type: "object",
        properties: {
          instance: {
            type: "string",
            $schema: "https://json-schema.org/draft/2020-12/schema#",
            description: "Your Payrexx instance name",
          },
        },
        required: ["instance"],
      },
    ],
  },
  response: {
    "200": {
      type: "object",
      properties: {
        status: { type: "string", examples: ["success"] },
        data: {
          type: "object",
          properties: {
            uuid: { type: "string", examples: ["C6B438B9"] },
            mode: { type: "string", examples: ["LIVE"] },
            object: { type: "string", examples: ["payout"] },
            amount: { type: "integer", default: 0, examples: [1000] },
            total_fees: { type: "integer", default: 0, examples: [0] },
            currency: { type: "string", examples: ["CHF"] },
            date: { type: "string", examples: ["2023-01-06"] },
            statement: { type: "string", examples: [""] },
            status: { type: "string", examples: ["pending"] },
            destination: {
              type: "object",
              properties: { type: {}, iban: {}, account_holder: {} },
            },
            transfers: { type: "array", items: {} },
            merchant: {
              type: "object",
              properties: {
                name: { type: "string", examples: ["demo"] },
                site_title: { type: "string", examples: ["Payrexx"] },
                owner: {
                  type: "object",
                  properties: {
                    company: { type: "string", examples: ["Demo Firma"] },
                    first_name: { type: "string", examples: ["Vorname"] },
                    last_name: { type: "string", examples: ["Nachname"] },
                    address: {
                      type: "string",
                      examples: ["strasse 1324 1234"],
                    },
                    zip: { type: "string", examples: ["1234"] },
                    place: { type: "string", examples: ["ort"] },
                    email: { type: "string", examples: ["info@payrexx.com"] },
                  },
                },
              },
            },
          },
        },
      },
      $schema: "https://json-schema.org/draft/2020-12/schema#",
    },
  },
} as const;
const RetrievePayouts = {
  metadata: {
    allOf: [
      {
        type: "object",
        properties: {
          instance: {
            type: "string",
            $schema: "https://json-schema.org/draft/2020-12/schema#",
            description: "Your Payrexx instance name",
          },
        },
        required: ["instance"],
      },
    ],
  },
  response: {
    "200": {
      type: "object",
      properties: {
        status: { type: "string", examples: ["success"] },
        data: {
          type: "array",
          items: {
            type: "object",
            properties: {
              uuid: { type: "string", examples: ["C3F99526"] },
              mode: { type: "string", examples: ["TEST"] },
              object: { type: "string", examples: ["payout"] },
              amount: { type: "integer", default: 0, examples: [1200] },
              total_fees: { type: "integer", default: 0, examples: [0] },
              currency: { type: "string", examples: ["CHF"] },
              date: { type: "string", examples: ["2023-01-04"] },
              statement: { type: "string", examples: ["Payrexx"] },
              status: { type: "string", examples: ["pending"] },
              destination: {
                type: "object",
                properties: {
                  type: { type: "string", examples: ["bank_account"] },
                  iban: {
                    type: "string",
                    examples: ["CH93 0076 2011 6238 5295 7"],
                  },
                  account_holder: { type: "string", examples: ["Demo Firma"] },
                },
              },
              transfers: { type: "array", items: {} },
              merchant: {
                type: "object",
                properties: {
                  name: { type: "string", examples: ["demo"] },
                  site_title: { type: "string", examples: ["Payrexx"] },
                  owner: {
                    type: "object",
                    properties: {
                      company: { type: "string", examples: ["Demo Firma"] },
                      first_name: { type: "string", examples: ["Vorname"] },
                      last_name: { type: "string", examples: ["Nachname"] },
                      address: {
                        type: "string",
                        examples: ["strasse 1324 1234"],
                      },
                      zip: { type: "string", examples: ["1234"] },
                      place: { type: "string", examples: ["ort"] },
                      email: { type: "string", examples: ["info@payrexx.com"] },
                    },
                  },
                },
              },
            },
          },
        },
      },
      $schema: "https://json-schema.org/draft/2020-12/schema#",
    },
  },
} as const;
const RetrieveTransactions = {
  body: {
    type: "object",
    properties: {
      filterDatetimeUtcGreaterThan: {
        type: "string",
        description:
          "Lower DateTime limit in the format of YYYY-MM-DD HH:MM:SS",
        format: "date",
      },
      filterDatetimeUtcLessThan: {
        type: "string",
        description:
          "Upper DateTime limit in the format of YYYY-MM-DD HH:MM:SS",
        format: "date",
      },
      filterMyTransactionsOnly: {
        type: "boolean",
        description:
          "When set to 1, only transactions related to this API key used will be returned.",
        default: false,
      },
      orderByTime: {
        type: "string",
        description:
          "ASC (ascending) or DESC (descending) for ordering by time of the transaction\n\nDefault: `ASC`",
        default: "ASC",
        enum: ['"ASC"', '"DESC"'],
      },
      offset: {
        type: "integer",
        description: "Row count to be used as offset",
        format: "int32",
        minimum: -2147483648,
        maximum: 2147483647,
      },
      limit: {
        type: "integer",
        description: "Max row count",
        format: "int32",
        minimum: -2147483648,
        maximum: 2147483647,
      },
    },
    $schema: "https://json-schema.org/draft/2020-12/schema#",
  },
  metadata: {
    allOf: [
      {
        type: "object",
        properties: {
          instance: {
            type: "string",
            $schema: "https://json-schema.org/draft/2020-12/schema#",
            description: "Your Payrexx instance name.",
          },
        },
        required: ["instance"],
      },
    ],
  },
  response: {
    "200": {
      type: "object",
      properties: {
        status: { type: "string", examples: ["success"] },
        data: {
          type: "array",
          items: {
            type: "object",
            properties: {
              id: { type: "integer", default: 0, examples: [1] },
              uuid: { type: "string", examples: ["f384000b"] },
              status: { type: "string", examples: ["authorized"] },
              time: { type: "string", examples: ["2020-01-20 15:56:02"] },
              lang: { type: "string", examples: ["de"] },
              pageUuid: { type: "string", examples: ["892dcf5c"] },
              payment: {
                type: "object",
                properties: {
                  brand: { type: "string", examples: ["visa"] },
                  wallet: {},
                  purchaseOnInvoiceInformation: {
                    type: "object",
                    properties: {
                      zip: { type: "string", examples: ["3600"] },
                      iban: {
                        type: "string",
                        examples: ["CH7431101111011000246"],
                      },
                      place: { type: "string", examples: ["Thun"] },
                      swift: { type: "string", examples: ["KLARCH22XXX"] },
                      address: { type: "string", examples: ["Burgstrasse 20"] },
                      company: { type: "string", examples: ["Payrexx AG"] },
                      bankName: { type: "string", examples: ["Klarpay AG"] },
                      reference: {
                        type: "string",
                        examples: ["287133000000000000000128000"],
                      },
                    },
                  },
                },
              },
              payoutUuid: { type: "string", examples: ["abcd1234"] },
              psp: { type: "string", examples: ["Payrexx_Payments"] },
              pspId: { type: "integer", default: 0, examples: [26] },
              mode: { type: "string", examples: ["LIVE"] },
              referenceId: { type: "string", examples: ["ORDER#321"] },
              invoice: {
                type: "object",
                properties: {
                  currencyAlpha3: { type: "string", examples: ["CHF"] },
                  products: {
                    type: "array",
                    items: {
                      type: "object",
                      properties: {
                        quantity: {
                          type: "integer",
                          default: 0,
                          examples: [1],
                        },
                        name: { type: "string", examples: ["Hoodie"] },
                        amount: {
                          type: "integer",
                          default: 0,
                          examples: [5900],
                        },
                      },
                    },
                  },
                  discount: {
                    type: "object",
                    properties: {
                      code: { type: "string", examples: ["SUPERSALE"] },
                      percentage: {
                        type: "integer",
                        default: 0,
                        examples: [33],
                      },
                      amount: { type: "integer", default: 0, examples: [3828] },
                    },
                  },
                  shippingAmount: {
                    type: "integer",
                    default: 0,
                    examples: [150000],
                  },
                  totalAmount: {
                    type: "integer",
                    default: 0,
                    examples: [9272],
                  },
                  customFields: {
                    type: "object",
                    properties: {
                      "20": {
                        type: "object",
                        properties: {
                          name: {
                            type: "string",
                            examples: ["Additional Information"],
                          },
                          value: {
                            type: "string",
                            examples: [
                              "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
                            ],
                          },
                        },
                      },
                    },
                  },
                },
              },
              refundable: { type: "boolean", default: true, examples: [true] },
              partiallyRefundable: {
                type: "boolean",
                default: true,
                examples: [true],
              },
              contact: {
                type: "object",
                properties: {
                  id: { type: "integer", default: 0, examples: [16] },
                  uuid: { type: "string", examples: ["9c9c0282"] },
                  company: { type: "string", examples: ["FeelGood"] },
                  title: { type: "string", examples: ["mister"] },
                  firstname: { type: "string", examples: ["Hans"] },
                  lastname: { type: "string", examples: ["Schmid"] },
                  street: { type: "string", examples: ["Dorstrasse 11"] },
                  zip: { type: "string", examples: ["1234"] },
                  place: { type: "string", examples: ["Habern"] },
                  country: { type: "string", examples: ["Schweiz"] },
                  countryISO: { type: "string", examples: ["CH"] },
                  date_of_birth: { type: "string", examples: ["10.03.1989"] },
                  email: { type: "string", examples: ["info@example.com"] },
                  phone: { type: "string", examples: ["+413312345678"] },
                  delivery_company: {
                    type: "string",
                    examples: ["NewFashion"],
                  },
                  delivery_title: { type: "string", examples: ["miss"] },
                  delivery_firstname: {
                    type: "string",
                    examples: ["Fabienne"],
                  },
                  delivery_lastname: { type: "string", examples: ["Muster"] },
                  delivery_street: {
                    type: "string",
                    examples: ["Seestrasse 39"],
                  },
                  delivery_zip: { type: "string", examples: ["4321"] },
                  delivery_place: { type: "string", examples: ["Nechters"] },
                  delivery_country: { type: "string", examples: ["Schweiz"] },
                  delivery_countryISO: { type: "string", examples: ["CH"] },
                },
              },
            },
          },
        },
      },
      $schema: "https://json-schema.org/draft/2020-12/schema#",
    },
  },
} as const;
const SendMailReceipt = {
  body: {
    type: "object",
    required: ["recipient"],
    properties: {
      recipient: { type: "string", description: "Email address of recipient" },
    },
    $schema: "https://json-schema.org/draft/2020-12/schema#",
  },
  metadata: {
    allOf: [
      {
        type: "object",
        properties: {
          id: {
            type: "integer",
            format: "int32",
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: "https://json-schema.org/draft/2020-12/schema#",
            description: "ID of the transaction with a receipt.",
          },
        },
        required: ["id"],
      },
      {
        type: "object",
        properties: {
          instance: {
            type: "string",
            $schema: "https://json-schema.org/draft/2020-12/schema#",
            description: "Your Payrexx instance name",
          },
        },
        required: ["instance"],
      },
    ],
  },
  response: {
    "200": {
      type: "object",
      properties: {
        status: { type: "string", examples: ["success"] },
        data: {
          type: "array",
          items: {
            type: "object",
            properties: {
              id: { type: "integer", default: 0, examples: [2] },
              uuid: { type: "string", examples: ["81d545ca"] },
              time: { type: "string", examples: ["2017-10-16 12:29:12"] },
              status: { type: "string", examples: ["confirmed"] },
              lang: { type: "string", examples: ["de"] },
              psp: { type: "string", examples: ["Payrexx_Payments"] },
            },
          },
        },
      },
      $schema: "https://json-schema.org/draft/2020-12/schema#",
    },
  },
} as const;
const Signaturecheck = {
  metadata: {
    allOf: [
      {
        type: "object",
        properties: {
          instance: {
            type: "string",
            $schema: "https://json-schema.org/draft/2020-12/schema#",
            description: "Your Payrexx instance name",
          },
        },
        required: ["instance"],
      },
    ],
  },
  response: {
    "200": {
      type: "object",
      properties: {
        status: { type: "string", examples: ["success"] },
        data: {
          type: "array",
          items: {
            type: "object",
            properties: { id: { type: "integer", default: 0, examples: [1] } },
          },
        },
      },
      $schema: "https://json-schema.org/draft/2020-12/schema#",
    },
  },
} as const;
const UpdateADesign = {
  body: {
    type: "object",
    required: ["name"],
    properties: {
      name: { type: "string", description: "Name of the design" },
      default: {
        type: "integer",
        description:
          "Set to 1 if design should be default design. Set to 0 otherwise.",
        default: 0,
        format: "int32",
        minimum: -2147483648,
        maximum: 2147483647,
      },
      fontFamily: {
        type: "string",
        description:
          "Arial, Courier New, Georgia, Open Sans, Times New Roman or Verdana",
      },
      fontSize: {
        type: "integer",
        description: "In pixel",
        format: "int32",
        minimum: -2147483648,
        maximum: 2147483647,
      },
      textColor: { type: "string", description: "Hex code without #" },
      textColorVPOS: { type: "string", description: "Hex code without #" },
      linkColor: { type: "string", description: "Hex code without #" },
      linkHoverColor: { type: "string", description: "Hex code without #" },
      buttonColor: { type: "string", description: "Hex code without #" },
      buttonHoverColor: { type: "string", description: "Hex code without #" },
      background: { type: "string", description: "color or image" },
      backgroundColor: {
        type: "string",
        description: "Hex code without #",
        default: "false",
      },
      headerBackground: { type: "string", description: "color or image" },
      headerBackgroundColor: {
        type: "string",
        description: "Hex code without #",
      },
      emailHeaderBackgroundColor: {
        type: "string",
        description: "Hex code without #",
      },
      headerImageShape: {
        type: "string",
        description: "square, rectangular or round",
      },
      useIndividualEmailLogo: {
        type: "integer",
        description: "0 or 1",
        format: "int32",
        minimum: -2147483648,
        maximum: 2147483647,
      },
      logoBackgroundColor: {
        type: "string",
        description: "Hex code without #",
      },
      logoBorderColor: { type: "string", description: "Hex code without #" },
      VPOSGradientColor1: { type: "string", description: "Hex code without #" },
      VPOSGradientColor2: { type: "string", description: "Hex code without #" },
      enableRoundedCorners: {
        type: "integer",
        description: "0 or 1",
        format: "int32",
        minimum: -2147483648,
        maximum: 2147483647,
      },
      VPOSBackground: { type: "string", description: "color or image" },
      headerImage: {
        type: "object",
        description: "CURLFile object",
        properties: {},
      },
      headerImageCustomLink: {
        type: "array",
        description:
          "Link of the header image. Use language ID as array key. Array key 0 or datatype 'string' will be handled as the default value (Will be used for each activated frontend language).",
        items: { type: "string" },
      },
      backgroundImage: {
        type: "object",
        description: "CURLFile object",
        properties: {},
      },
      headerBackgroundImage: {
        type: "object",
        description: "CURLFile object",
        properties: {},
      },
      emailHeaderImage: {
        type: "object",
        description: "CURLFile object",
        properties: {},
      },
      VPOSBackgroundImage: {
        type: "object",
        description: "CURLFile object",
        properties: {},
      },
    },
    $schema: "https://json-schema.org/draft/2020-12/schema#",
  },
  metadata: {
    allOf: [
      {
        type: "object",
        properties: {
          uuid: {
            type: "string",
            $schema: "https://json-schema.org/draft/2020-12/schema#",
            description: "The UUID of the design to retrieve",
          },
        },
        required: ["uuid"],
      },
      {
        type: "object",
        properties: {
          instance: {
            type: "string",
            $schema: "https://json-schema.org/draft/2020-12/schema#",
            description: "Your Payrexx instance name",
          },
        },
        required: ["instance"],
      },
    ],
  },
  response: {
    "200": {
      type: "object",
      properties: {
        status: { type: "string", examples: ["success"] },
        data: {
          type: "array",
          items: {
            type: "object",
            properties: {
              uuid: { type: "string", examples: ["f45aff72"] },
              default: { type: "integer", default: 0, examples: [0] },
              name: { type: "string", examples: ["Example Design (via API)"] },
              fontFamily: { type: "string", examples: ["Arial"] },
              fontSize: { type: "string", examples: ["14"] },
              textColor: { type: "string", examples: ["24363A"] },
              textColorVPOS: { type: "string", examples: ["24363a"] },
              linkColor: { type: "string", examples: ["0074D6"] },
              linkHoverColor: { type: "string", examples: ["2A6496"] },
              buttonColor: { type: "string", examples: ["99CC33"] },
              buttonHoverColor: { type: "string", examples: ["19B8F2"] },
              background: { type: "string", examples: ["color"] },
              backgroundColor: { type: "string", examples: ["F9FAFA"] },
              headerBackground: { type: "string", examples: ["color"] },
              headerBackgroundColor: { type: "string", examples: ["00AFF0"] },
              emailHeaderBackgroundColor: {
                type: "string",
                examples: ["FAFAFA"],
              },
              headerImageShape: { type: "string", examples: ["square"] },
              useIndividualEmailLogo: {
                type: "integer",
                default: 0,
                examples: [0],
              },
              logoBackgroundColor: { type: "string", examples: ["FFFFFF"] },
              logoBorderColor: { type: "string", examples: ["DDDDDD"] },
              VPOSGradientColor1: { type: "string", examples: ["00AFF0"] },
              VPOSGradientColor2: { type: "string", examples: ["00AFF0"] },
              enableRoundedCorners: {
                type: "integer",
                default: 0,
                examples: [1],
              },
              headerImage: { type: "string", examples: ["payrexx-logo.png"] },
              backgroundImage: { type: "string", examples: [""] },
              headerBackgroundImage: { type: "string", examples: [""] },
              emailHeaderImage: { type: "string", examples: [""] },
              headerImageCustomLink: {
                type: "object",
                properties: {
                  "1": { type: "string", examples: ["https://payrexx.com/en"] },
                  "2": { type: "string", examples: ["https://payrexx.com/en"] },
                  "3": { type: "string", examples: ["https://payrexx.com/en"] },
                  "4": { type: "string", examples: ["https://payrexx.com/en"] },
                  "7": { type: "string", examples: ["https://payrexx.com/en"] },
                  "8": { type: "string", examples: ["https://payrexx.com/en"] },
                  "9": { type: "string", examples: ["https://payrexx.com/en"] },
                  "10": {
                    type: "string",
                    examples: ["https://payrexx.com/en"],
                  },
                  "11": {
                    type: "string",
                    examples: ["https://payrexx.com/en"],
                  },
                  "12": {
                    type: "string",
                    examples: ["https://payrexx.com/en"],
                  },
                  "13": {
                    type: "string",
                    examples: ["https://payrexx.com/en"],
                  },
                  "14": {
                    type: "string",
                    examples: ["https://payrexx.com/en"],
                  },
                },
              },
            },
          },
        },
      },
      $schema: "https://json-schema.org/draft/2020-12/schema#",
    },
  },
} as const;
const UpdateAPreAuthorization = {
  body: {
    type: "object",
    properties: {
      amount: {
        type: "integer",
        description: "Amount for charge in cents.",
        format: "int32",
        minimum: -2147483648,
        maximum: 2147483647,
      },
    },
    $schema: "https://json-schema.org/draft/2020-12/schema#",
  },
  metadata: {
    allOf: [
      {
        type: "object",
        properties: {
          id: {
            type: "integer",
            format: "int32",
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: "https://json-schema.org/draft/2020-12/schema#",
            description: "ID of the transaction to charge.",
          },
        },
        required: ["id"],
      },
      {
        type: "object",
        properties: {
          instance: {
            type: "string",
            $schema: "https://json-schema.org/draft/2020-12/schema#",
            description: "Your Payrexx instance name",
          },
        },
        required: ["instance"],
      },
    ],
  },
  response: {
    "200": {
      type: "object",
      properties: {
        status: { type: "string", examples: ["success"] },
        data: {
          type: "array",
          items: {
            type: "object",
            properties: {
              id: { type: "integer", default: 0, examples: [2] },
              uuid: { type: "string", examples: ["81d545ca"] },
              referenceId: { type: "string", examples: ["975382"] },
              time: { type: "string", examples: ["2017-10-16 12:29:12"] },
              status: { type: "string", examples: ["reserved"] },
              lang: { type: "string", examples: ["de"] },
              psp: { type: "string", examples: ["Payrexx_Payments"] },
              amount: { type: "integer", default: 0, examples: [123] },
            },
          },
        },
      },
      $schema: "https://json-schema.org/draft/2020-12/schema#",
    },
  },
} as const;
const UpdateASubscription = {
  body: {
    type: "object",
    properties: {
      amount: {
        type: "string",
        description:
          "The new amount in cents which will be payed on the next payment interval.",
      },
      currency: {
        type: "string",
        description: "The ISO code of the currency of the payment.",
      },
      purpose: {
        type: "string",
        description: "The payment purpose. What is the payer paying for?",
      },
      vatRate: { type: "string", description: "VAT Rate Percentage" },
    },
    $schema: "https://json-schema.org/draft/2020-12/schema#",
  },
  metadata: {
    allOf: [
      {
        type: "object",
        properties: {
          id: {
            type: "integer",
            format: "int32",
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: "https://json-schema.org/draft/2020-12/schema#",
            description: "The id of the subscription to retrieve.",
          },
        },
        required: ["id"],
      },
      {
        type: "object",
        properties: {
          instance: {
            type: "string",
            $schema: "https://json-schema.org/draft/2020-12/schema#",
            description: "Your Payrexx instance name",
          },
        },
        required: ["instance"],
      },
    ],
  },
  response: {
    "200": {
      type: "object",
      properties: {
        status: { type: "string", examples: ["success"] },
        data: {
          type: "array",
          items: {
            type: "object",
            properties: {
              id: { type: "integer", default: 0, examples: [1] },
              status: { type: "string", examples: ["active"] },
              start: { type: "string", examples: ["2014-12-18"] },
              end: {},
              valid_until: { type: "string", examples: ["2015-01-18"] },
              invoice: {
                type: "object",
                properties: {
                  number: { type: "string", examples: ["Test subscription"] },
                  amount: { type: "integer", default: 0, examples: [1] },
                  currency: { type: "string", examples: ["CHF"] },
                  referenceId: { type: "string", examples: [""] },
                  paymentRequestId: {},
                  paymentLink: {},
                },
              },
              contact: {
                type: "object",
                properties: {
                  id: { type: "integer", default: 0, examples: [1] },
                  title: { type: "string", examples: [""] },
                  firstname: { type: "string", examples: [""] },
                  lastname: { type: "string", examples: [""] },
                  company: { type: "string", examples: [""] },
                  street: { type: "string", examples: [""] },
                  zip: { type: "string", examples: [""] },
                  place: { type: "string", examples: [""] },
                  country: { type: "string", examples: [""] },
                  countryISO: { type: "string", examples: [""] },
                  phone: { type: "string", examples: [""] },
                  email: { type: "string", examples: ["user@example.com"] },
                  date_of_birth: { type: "string", examples: [""] },
                },
              },
            },
          },
        },
      },
      $schema: "https://json-schema.org/draft/2020-12/schema#",
    },
  },
} as const;
const UpdateContactDetails = {
  body: {
    type: "object",
    required: ["fields"],
    properties: {
      fields: {
        type: "object",
        description: "The contact data fields which should be stored.",
        properties: {
          title: {
            type: "object",
            properties: {
              value: { type: "string", description: "Value of field" },
            },
          },
          forename: {
            type: "object",
            properties: {
              value: { type: "string", description: "Value of field" },
            },
          },
          surname: {
            type: "object",
            properties: {
              value: { type: "string", description: "Value of field" },
            },
          },
          company: {
            type: "object",
            properties: {
              value: { type: "string", description: "Value of field" },
            },
          },
          street: {
            type: "object",
            properties: {
              value: { type: "string", description: "Value of field" },
            },
          },
          postcode: {
            type: "object",
            properties: {
              value: { type: "string", description: "Value of field" },
            },
          },
          place: {
            type: "object",
            properties: {
              value: { type: "string", description: "Value of field" },
            },
          },
          country: {
            type: "object",
            properties: {
              value: { type: "string", description: "Value of field" },
            },
          },
          delivery_title: {
            type: "object",
            properties: {
              value: { type: "string", description: "Value of field" },
            },
          },
          delivery_forename: {
            type: "object",
            properties: {
              value: { type: "string", description: "Value of field" },
            },
          },
          delivery_surname: {
            type: "object",
            properties: {
              value: { type: "string", description: "Value of field" },
            },
          },
          delivery_company: {
            type: "object",
            properties: {
              value: { type: "string", description: "Value of field" },
            },
          },
          delivery_street: {
            type: "object",
            properties: {
              value: { type: "string", description: "Value of field" },
            },
          },
          delivery_postcode: {
            type: "object",
            properties: {
              value: { type: "string", description: "Value of field" },
            },
          },
          delivery_place: {
            type: "object",
            properties: {
              value: { type: "string", description: "Value of field" },
            },
          },
          delivery_country: {
            type: "object",
            properties: {
              value: { type: "string", description: "Value of field" },
            },
          },
          phone: {
            type: "object",
            properties: {
              value: { type: "string", description: "Value of field" },
            },
          },
          email: {
            type: "object",
            properties: {
              value: { type: "string", description: "Value of field" },
            },
          },
          date_of_birth: {
            type: "object",
            properties: {
              value: { type: "string", description: "Value of field" },
            },
          },
          terms: {
            type: "string",
            description:
              "The terms must be accepted if this field is defined in the request",
          },
          privacy_policy: {
            type: "string",
            description:
              "The privacy policy must be accepted if this field is defined in the request",
          },
          custom_field_1: {
            type: "object",
            properties: {
              name: {
                type: "array",
                description: "Name of field",
                items: { type: "string" },
              },
              value: { type: "string", description: "Value of field" },
            },
          },
          custom_field_2: {
            type: "object",
            properties: {
              name: {
                type: "array",
                description: "Name of field",
                items: { type: "string" },
              },
              value: { type: "string", description: "Value of field" },
            },
          },
          custom_field_3: {
            type: "object",
            properties: {
              name: {
                type: "array",
                description: "Name of field",
                items: { type: "string" },
              },
              value: { type: "string", description: "Value of field" },
            },
          },
          custom_field_4: {
            type: "object",
            properties: {
              name: {
                type: "array",
                description: "Name of field",
                items: { type: "string" },
              },
              value: { type: "string", description: "Value of field" },
            },
          },
          custom_field_5: {
            type: "object",
            properties: {
              name: {
                type: "array",
                description: "Name of field",
                items: { type: "string" },
              },
              value: { type: "string", description: "Value of field" },
            },
          },
        },
      },
    },
    $schema: "https://json-schema.org/draft/2020-12/schema#",
  },
  metadata: {
    allOf: [
      {
        type: "object",
        properties: {
          id: {
            type: "integer",
            format: "int32",
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: "https://json-schema.org/draft/2020-12/schema#",
            description: "ID of the Pre-Authorization / Tokenization",
          },
        },
        required: ["id"],
      },
      {
        type: "object",
        properties: {
          instance: {
            type: "string",
            $schema: "https://json-schema.org/draft/2020-12/schema#",
            description: "Your Payrexx instance name",
          },
        },
        required: ["instance"],
      },
    ],
  },
  response: {
    "200": {
      type: "object",
      properties: {
        status: { type: "string", examples: ["success"] },
        data: {
          type: "array",
          items: {
            type: "object",
            properties: {
              id: { type: "integer", default: 0, examples: [2] },
              uuid: { type: "string", examples: ["b32a7620"] },
              referenceId: { type: "string", examples: [""] },
              time: { type: "string", examples: ["2024-03-12 14:15:51"] },
              status: { type: "string", examples: ["confirmed"] },
              lang: { type: "string", examples: ["de"] },
              psp: { type: "string", examples: ["Native_PSP"] },
              amount: { type: "integer", default: 0, examples: [4400] },
              contact: {
                type: "object",
                properties: {
                  id: { type: "integer", default: 0, examples: [23] },
                  uuid: { type: "string", examples: ["1a2b3c"] },
                  title: { type: "string", examples: [""] },
                  firstname: { type: "string", examples: ["Max"] },
                  lastname: { type: "string", examples: ["Mustermann"] },
                  company: { type: "string", examples: [""] },
                  street: { type: "string", examples: [""] },
                  zip: { type: "string", examples: [""] },
                  place: { type: "string", examples: [""] },
                  country: { type: "string", examples: [""] },
                  countryISO: { type: "string", examples: [""] },
                  phone: { type: "string", examples: [""] },
                  email: {
                    type: "string",
                    examples: ["max.mustermann@mysite.com"],
                  },
                  date_of_birth: { type: "string", examples: [""] },
                  delivery_title: { type: "string", examples: [""] },
                  delivery_firstname: { type: "string", examples: [""] },
                  delivery_lastname: { type: "string", examples: [""] },
                  delivery_company: { type: "string", examples: [""] },
                  delivery_street: { type: "string", examples: [""] },
                  delivery_zip: { type: "string", examples: [""] },
                  delivery_place: { type: "string", examples: [""] },
                  delivery_country: { type: "string", examples: [""] },
                  delivery_countryISO: { type: "string", examples: [""] },
                },
              },
            },
          },
        },
      },
      $schema: "https://json-schema.org/draft/2020-12/schema#",
    },
  },
} as const;
export {
  CancelAWaitingTransaction,
  CaptureATransaction,
  ChargeAPreAuthorizedReservedTransaction,
  CreateACashTransaction,
  CreateADesign,
  CreateAGateway,
  CreateANewSubscription,
  CreateAPage,
  CreateAPaylink,
  CreateAQrCode,
  CreateManualPayout,
  DeleteADesign,
  DeleteAGateway,
  DeleteAQrCode,
  DeleteAQrCodeScan,
  DeleteAReservedTransaction,
  GetAllActivePaymentMethods,
  GetOnePaymentMethod,
  LoginASubscriptionCustomer,
  PreAuthorizeATokenization,
  RefundATransaction,
  RemoveAPaylink,
  RemoveASubscription,
  RetrieveADesign,
  RetrieveAGateway,
  RetrieveAPage,
  RetrieveAPaylink,
  RetrieveAQrCode,
  RetrieveATransaction,
  RetrieveAllDesigns,
  RetrieveAllPaymentProviders,
  RetrievePages,
  RetrievePayout,
  RetrievePayoutWithDetails,
  RetrievePayouts,
  RetrieveTransactions,
  SendMailReceipt,
  Signaturecheck,
  UpdateADesign,
  UpdateAPreAuthorization,
  UpdateASubscription,
  UpdateContactDetails,
};
