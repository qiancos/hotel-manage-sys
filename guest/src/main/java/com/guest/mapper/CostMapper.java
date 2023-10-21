package com.guest.mapper;

import com.guest.pojo.po.Cost;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * <p>
 *  Mapper 接口
 * </p>
 *
 * @author qianye
 * @since 2023-9-17
 */
@Mapper
@Repository
public interface CostMapper extends BaseMapper<Cost> {
    List<Cost> getCostByRoomId(String roomId);
    boolean settleCostByRoomId(String roomId);
    boolean removeByRoomId(String roomId);
    int getNotCostNum(String roomId);
    boolean removeByCostTypeId(Integer id);
}
