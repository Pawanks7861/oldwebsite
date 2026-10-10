import { EventFeature, MenuFeature, MenuFlowFeature } from "@/components/sections/features-events";
import { GalleryFeature, NotificationsFeature, QuotationFeature, StaffFeature, VehiclesFeature } from "@/components/sections/features-people";
import { InventoryFeature, MarketFeature, MaterialFeature, PurchaseFeature } from "@/components/sections/features-supply";
import { FinancialSection } from "@/components/sections/financial-section";

export function FeaturesSection() {
  return (
    <div>
      <EventFeature />
      <MenuFeature />
      <MenuFlowFeature />
      <InventoryFeature />
      <MaterialFeature />
      <PurchaseFeature />
      <MarketFeature />
      <StaffFeature />
      <VehiclesFeature />
      <QuotationFeature />
      <FinancialSection />
      <GalleryFeature />
      <NotificationsFeature />
    </div>
  );
}
