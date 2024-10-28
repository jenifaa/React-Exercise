import PriceOption from "../Components/priceOption/priceOption";

const PriceOptions = () => {



   const priceOptions = [
        {
          "id": 1,
          "name": "Basic Plan",
          "price": 19.99,
          "features": [
            "Access to gym equipment",
            "Locker room access",
            "1 guest pass per month",
            "Free WiFi",
            "Basic fitness assessment",
            "Standard operating hours access"
          ]
        },
        {
          "id": 2,
          "name": "Standard Plan",
          "price": 39.99,
          "features": [
            "Access to gym equipment",
            "Locker room access",
            "4 guest passes per month",
            "Group fitness classes",
            "Access to sauna",
            "1 free smoothie per month",
            "Access to online fitness tracking app",
            "Extended operating hours access"
          ]
        },
        {
          "id": 3,
          "name": "Premium Plan",
          "price": 59.99,
          "features": [
            "All Standard Plan features",
            "Personal training sessions (2 per month)",
            "Priority booking for classes",
            "Nutritional consultation",
            "Access to exclusive equipment",
            "Monthly fitness assessment",
            "Complimentary towel service",
            "Access to special workshops and events"
          ]
        },
        {
          "id": 4,
          "name": "VIP Plan",
          "price": 79.99,
          "features": [
            "All Premium Plan features",
            "Unlimited guest passes",
            "Private locker with key",
            "Free fitness merchandise (quarterly)",
            "24/7 gym access",
            "Dedicated personal trainer (weekly session)",
            "Free customized meal plans",
            "Access to VIP lounge area",
            "Complimentary sports drinks"
          ]
        }
      ]
      


    return (
        <div className="">
            <h2 className="text-5xl my-5">Best Prices in Town</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {
                priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
            }
            </div>
        </div>
    );
};


export default PriceOptions;