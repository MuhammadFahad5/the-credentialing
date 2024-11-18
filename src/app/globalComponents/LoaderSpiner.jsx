import { LoadingOutlined } from "@ant-design/icons";
import { Space, Spin } from "antd";
import { useEffect } from "react";

export default function LoaderSpinner({ setIsLoading, isLoading }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [setIsLoading]);

  return (
    <>
      {isLoading ? (
        <Space className="w-full h-[100vh] flex justify-center items-center">
          <Spin indicator={true} size="large"></Spin>
        </Space>
      ) : null}
    </>
  );
}
