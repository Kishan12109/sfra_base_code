/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
'use strict';
var server = require('server');
server.get('Show', function (req, res, next) {
    var order = {
        orderDate: '5/31/2023 9:45:38 AM',
        customerEmail: 'TEST@REVIEW.COM',
        status: 'Pending',
        homeDeliveryCharge: {},
        totalStateRecyclingFee: {},
        salesTax: {},
        orderTotalDiscount: {},
        orderTotal: {},
        shippingCharge: {},
        subtotal: {},
        confirmationId: '725981054625',
        takeBackEligible: 'No',
        fppRefundAmount: 0,
        billingAddress: {
            city: 'TEMPA',
            countryCode: 'USA',
            firstName: 'TEST',
            lastName: 'NODDY',
            name: 'test Noddy',
            street: '100 MAIN STREET',
            street2: '',
            stateCode: 'FL',
            postalCode: '33606',
            phone: '9833376663',
            email: 'TEST@REVIEW.COM',
            custom: {
                altPhone1: ''
            }
        },
        paymentInstruments: [
            {
                amount: 214.98,
                paymentCard: {
                    cardType: 'AMEX',
                    isPaypal: false,
                    nameOnCard: 'test Noddy',
                    maskedCardNumber: 'XXXX-XXXX-XXXX-0002',
                    privateLabelPromoDesc: '',
                    isPrivateLabel: false
                }
            },
            {
                amount: 1719.98,
                paymentCard: {
                    cardType: 'AMEX',
                    isPaypal: false,
                    nameOnCard: 'test Noddy',
                    maskedCardNumber: 'XXXX-XXXX-XXXX-0002',
                    privateLabelPromoDesc: '',
                    isPrivateLabel: false
                }
            }
        ],
        shipments: [
            {
                shippingMethod: {
                    displayName: 'DS:&nbsp;$0.00<br/>HD:&nbsp;$199.99'
                },
                custom: {
                    shipmentType: 'DS:&nbsp;$0.00<br/>HD:&nbsp;$199.99'
                },
                shippingAddress: {
                    city: 'TEMPA',
                    countryCode: 'USA',
                    firstName: 'TEST',
                    lastName: 'NODDY',
                    name: 'test Noddy',
                    street: '100 MAIN STREET',
                    street2: '',
                    stateCode: 'FL',
                    postalCode: '33606',
                    phone: '9833376663',
                    email: 'TEST@REVIEW.COM',
                    custom: {
                        altPhone1: ''
                    }
                },
                giftCertificateLineItems: [],
                productLineItems: [
                    {
                        imageUrl:
                            'https://ashleyfurniture.scene7.com/is/image/AshleyFurniture/A4000363-IS?$AFHS-Cart-Thumb$',
                        imageAltText: 'Bookcase',
                        productName: 'Bookcase',
                        productNumber: 'A4000363',
                        productUrl: null,
                        orderStatus: 'Pending',
                        color: '',
                        size: '',
                        dimension: "24''W x 12''D x 49''H",
                        quantity: 1,
                        shouldShowSetOfN: false,
                        linePrice: 139.99,
                        taxAmount: 0,
                        offerNames: '',
                        discountAmount: 0,
                        lineTotal: 139.99,
                        linePriceWithDiscount: 139.99,
                        lineTotalDiscount: 0,
                        deliveryModeId: 'DS',
                        deliveryModeDescription: 'Direct Ship',
                        promotionLines: [],
                        kitComponents: null,
                        shippingDateRequested: '2023-05-31T00:00:00+00:00',
                        receiptDateRequested: '2023-05-31T00:00:00+00:00',
                        isMixedMode: false,
                        fulfilledBy: 'ASHCOMM STAGE1 LLC',
                        shippingMode: 'DS',
                        priceAfterDiscount: 139.99,
                        hasOHDSShippingDateRequested: false,
                        ohdsShippingMessage: 'Get it by Friday, June 2',
                        lineOrderNumber: '7259 81054625 01',
                        scheduledDeliveryDate: '0001-01-01T00:00:00+00:00',
                        actualDeliveryDate: '0001-01-01T00:00:00+00:00',
                        trackingCarrier: '',
                        trackingNumbers: null,
                        shippingDate: '0001-01-01T00:00:00+00:00',
                        stateRecyclingFee: 0,
                        hasStateRecyclingFee: false,
                        takeBackSelected: 'No',
                        inventoryAvailabilityMessage:
                            'Get it by Friday, June 2',
                        returnOrderIds: [],
                        unprocessedReturnDate: [],
                        unprocessedReturnQty: [],
                        unprocessedReturnReasonCode: [],
                        unprocessedCancelDate: [],
                        unprocessedCancelQty: [],
                        unprocessedCancelReasonCode: [],
                        onlineCancelQty: [],
                        onlineCancelDate: [],
                        onlineCancelReasonCode: [],
                        onlineCancelAmount: [],
                        onlineCancelFPPAmount: [],
                        onlineCancelTaxAmount: [],
                        onlineCancelDlvChargeAmount: [],
                        onlineCancelStatus: [],
                        onlineCancelPaymentStatus: [],
                        availableQtyForReturn: 0,
                        availableQtyForCancel: 0,
                        returnReasonCode: '',
                        originalQuantity: 0.
                    },
                    {
                        imageUrl:
                            'https://ashleyfurniture.scene7.com/is/image/AshleyFurniture/M57331-IS?$AFHS-Cart-Thumb$',
                        imageAltText: 'Queen Mattress',
                        productName: 'Queen Mattress',
                        productNumber: 'M57331',
                        productUrl: null,
                        orderStatus: 'Pending',
                        color: '',
                        size: '',
                        dimension: "59''W x 79''D x 17''H",
                        quantity: 1,
                        shouldShowSetOfN: false,
                        linePrice: 1399.99,
                        taxAmount: 0,
                        offerNames: '',
                        discountAmount: 0,
                        lineTotal: 1399.99,
                        linePriceWithDiscount: 1399.99,
                        lineTotalDiscount: 0,
                        deliveryModeId: 'HD',
                        deliveryModeDescription: 'Home Delivery',
                        promotionLines: [],
                        kitComponents: null,
                        shippingDateRequested: '2023-06-21T00:00:00+00:00',
                        receiptDateRequested: '2023-06-21T00:00:00+00:00',
                        isMixedMode: false,
                        fulfilledBy: 'ASHLEY GLOBAL RETAIL, LLC',
                        shippingMode: 'HD',
                        priceAfterDiscount: 1399.99,
                        hasOHDSShippingDateRequested: true,
                        ohdsShippingMessage: 'Usually delivers in 2 to 3 weeks',
                        lineOrderNumber: '7259 81054625 02',
                        scheduledDeliveryDate: '0001-01-01T00:00:00+00:00',
                        actualDeliveryDate: '0001-01-01T00:00:00+00:00',
                        trackingCarrier: '',
                        trackingNumbers: null,
                        shippingDate: '0001-01-01T00:00:00+00:00',
                        stateRecyclingFee: 0,
                        hasStateRecyclingFee: false,
                        takeBackSelected: 'No',
                        inventoryAvailabilityMessage:
                            'Usually delivers in 2 to 3 weeks',
                        returnOrderIds: [],
                        unprocessedReturnDate: [],
                        unprocessedReturnQty: [],
                        unprocessedReturnReasonCode: [],
                        unprocessedCancelDate: [],
                        unprocessedCancelQty: [],
                        unprocessedCancelReasonCode: [],
                        onlineCancelQty: [],
                        onlineCancelDate: [],
                        onlineCancelReasonCode: [],
                        onlineCancelAmount: [],
                        onlineCancelFPPAmount: [],
                        onlineCancelTaxAmount: [],
                        onlineCancelDlvChargeAmount: [],
                        onlineCancelStatus: [],
                        onlineCancelPaymentStatus: [],
                        availableQtyForReturn: 0,
                        availableQtyForCancel: 0,
                        returnReasonCode: '',
                        originalQuantity: 0
                    }
                ]
            }
        ],
        onlineOrder: true,
        sortYear: '2023',
        sortDate: 'May 31, 2023'
    };
    var prod = 0;
    var countArr = [];
    var NumOfShipmentsCount =
        order.shipments && order.shipments.length > 0
            ? order.shipments.length
            : 0;
    var dateofOrder = order.orderDate;
    var prodObj = order.shipments;
    if (prodObj !== null) {
        for (var i in prodObj) {
            var Lineitems = prodObj[i].productLineItems ? prodObj[i].productLineItems.length : 0;
            prod++;
            countArr.push({ Shipment: i, NumberOfItems: Lineitems });
            prod = 0;
        }
    }
    var shipment,
        productLineItem,
        displayNames,
        shipmentNames;
    for (var k = 0; k < countArr.length; k++) {
        var abc = countArr[k].NumberOfItems;
        shipment = order.shipments[k];
        displayNames = shipment.shippingMethod.displayName.toString().split('<br/>');
        shipmentNames = shipment.custom.shipmentType.toString().split('<br/>');
        if (abc > 1) {
            var shipments = {};
            for (var m = 0; m < abc; m++) {
                shipments.shippingMethod = shipment.shippingMethod;
                shipments.custom = shipment.custom;
                shipments.shippingAddress = shipment.shippingAddress;
                shipments.giftCertificateLineItems = shipment.giftCertificateLineItems;
                productLineItem = shipment.productLineItems[m];
                shipments.shippingMethod.displayName = displayNames[m];
                shipments.custom.shipmentType = shipmentNames[m];
                shipments.productLineItems = shipment.productLineItems[m];
                order.shipments = shipments;
            }
        }
    }
    res.render('demoJson', {
        obj1: NumOfShipmentsCount,
        obj2: JSON.stringify(shipments),
        obj3: JSON.stringify(shipment),
        obj5: JSON.stringify(order)
    });
    next();
});

module.exports = server.exports();
